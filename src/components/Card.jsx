export default function Card(props) {
    console.log(props)
    const {id,title,location,googleMapsUrl,startDate,endDate,description,imageUrl} = props
    return(
        <div id={id} className="card">
            <img className="card-image" src={imageUrl} alt="Landscape of autralia" />
            <div>
                <span className="card-location-text"><img className="card-pin" src="src\assets\PinLocation.png" alt=""/>{location}</span>
                <a href={googleMapsUrl} className="card-googlemaps">View on Google Maps</a>
                <p>{title}</p>
                <span className="card-date">{startDate} - <span>{endDate}</span></span>
                <p className="card-text">{description}</p>
            </div>

        </div>
    );
}