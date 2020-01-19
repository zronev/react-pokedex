import React from 'react'

const About = () => {
  return (
    <main className="about">
      <p className="about__description">
        The Pokédex (ポケモン図鑑 Pokemon Zukan) is an electronic device designed to
        catalogue and provide information regarding the various species of Pokémon
        featured in the Pokémon video game, anime and manga series.
        <br />
        <br />
        The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau
        of "pocket" and "monster") and "index".
        <br />
        <br />
        The Japanese name is simply "Pokémon Encyclopedia", and it can feature every
        Pokémon on it, depending on the Pokédex.
        <br />
        <br />
        All data is collected 
        using <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="external-link">PokéAPI</a>.
      </p>

      <a
        href="https://github.com/zronev"
        target="_blank"
        rel="noopener noreferrer"
        class="link link--github about__link"
      >
        <i className="icon icon--github fab fa-github" />
      </a>
    </main>
  )
}

export default About
