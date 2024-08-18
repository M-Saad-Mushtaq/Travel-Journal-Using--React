import locationIcon from '../images/location.ico'
require('./main.css');

const Main = (props) => {
    return (
        <div className = "main">
            <div className = "div--img">
                <img src = {props.obj.image} alt = "NOT AVAILABLE" className = "image"/>
            </div>
            <div className = "div--info">
                <div className="div--top">
                    <img src = {locationIcon} alt = "NOT AVAILABLE" className = "location-icon" />
                    <h4 className="location">{props.obj.location.toUpperCase()}</h4>
                    <a href = {props.obj.googleMapsUrl} className = "map-link">View on Google Maps</a>
                </div>
                <h1 className = "title">{props.obj.title}</h1>
                <p className = "date">{props.obj.startDate} - {props.obj.endDate}</p>
                <p className = "description">{props.obj.description}</p>
            </div>
        </div>
    )
}

export default Main;