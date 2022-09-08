export default function Card(props) {
    console.log(props)
    const {id,title,authors,scratchUrl,description,imageUrl} = props
    return(
        <div id={id} className="card">
            <img className="card-image" src={`../assets/${imageUrl}.png`} alt="Project photo" />
            <div>
                <p>{title}</p>
                <p className="card-text">Autor/es: {authors}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">Link proyecto: <a href={scratchUrl} className="card-text">{scratchUrl}</a></p>
            </div>
        </div>
    );
}