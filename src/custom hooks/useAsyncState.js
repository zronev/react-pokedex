import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataLoadingErrorAction, dataSetDataAction, dataLoadingAction } from '../actions'

export const useAsyncState = (stateProperty, loader) => {
  const mounted = useRef(false)
  const dispatch = useDispatch()
  const stateValue = useSelector(state => state[stateProperty])

  if (!stateValue) {
    throw new Error(`Can't get ${stateProperty}`)
  }

  useEffect(() => {
    const load = async () => {
      try {
        console.log('hi!')
        const result = await loader
        console.log(mounted.current)
        console.log(result)
        mounted.current && dispatch(dataSetDataAction(stateProperty, result.pokemons))
        return result
      } catch (e) {
        mounted.current && dispatch(dataLoadingErrorAction(stateProperty, e))
      }
    }

    mounted.current = true
    dispatch(dataLoadingAction(stateProperty))
    load()

    return () => {
      mounted.current = false
    }
  }, [stateProperty, loader, dispatch])

  return stateValue
}
