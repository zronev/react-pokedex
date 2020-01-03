import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToLiked, deleteFromLiked } from '../actions'

const Like = ({ id }) => {
  const dispatch = useDispatch()
  const liked = useSelector(state => state.liked)

  const [isLiked, setIsLiked] = useState(false)

  const handleLikeClick = () => {
    dispatch(addToLiked(id))
  }

  const handleDislikeClick = () => {
    dispatch(deleteFromLiked(id))
  }

  useEffect(() => {
    setIsLiked(liked.includes(id))
  }, [liked, id])

  return (
    <>
      {isLiked ? (
        <button onClick={handleDislikeClick} className="like like--active">
          <i className="fas fa-heart" />
        </button>
      ) : (
        <button onClick={handleLikeClick} className="like">
          <i className="far fa-heart" />
        </button>
      )}
    </>
  )
}

export default Like
