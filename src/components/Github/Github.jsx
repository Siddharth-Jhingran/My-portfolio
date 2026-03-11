import React from 'react'
import Macwindow from '../Macwindow/Macwindow'
import gitData from '../../github.json'
import './Github.scss'


const projectCard = ({ id = "", imageUrl = "", name = "", description = "", technologies = [], repoLink = "", liveLink = "" }) => {
    return (
        <div className="card">
            <div className="image">
                <img src={imageUrl} alt="" />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="tags">
                {technologies.map((tech) => <p className='tag'>{tech}</p>)}
            </div>
            <div className="url">

                <a href={repoLink}>Repo Link</a>
                {liveLink && <a href={liveLink}> Demo Link</a>}
            </div>

        </div>
    )

}





const Github = () => {




    return (
        <>
            <Macwindow>
                <div className="cards">
                    {gitData.map((item) => (
                        // <div key={item.id}>
                          

                          projectCard(item)
                          
                        // </div>
                    ))}
                </div>
            </Macwindow>
        </>
    )
}

export default Github