import './Card.css';

export default function ProjectCard ({ name, description, image, link})  {
    return (
        <div className="card-content">
            <img src={image} alt={name} className="project-image"/>
            <div className="project-info">
                <h3>{name}</h3>
                <p>{description}</p>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                        Ver Proyecto
                    </a>
                )}
            </div>
        </div>
    )
}