import React from 'react'
import Macwindow from '../Macwindow/Macwindow'
import './Spotify.scss'

const Spotify = () => {
  return (
    <Macwindow height="63vh" width="35vw" x="800" y="93">
      <div className='spotify'>
        <iframe data-testid="embed-iframe" style={{"border-radius": "12px"}} src="https://open.spotify.com/embed/playlist/1R5fFpLUih7RG0ChBi2zT6?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      </div>
    </Macwindow>
  )
}

export default Spotify