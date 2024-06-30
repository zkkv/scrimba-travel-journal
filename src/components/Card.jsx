import pin from "../../public/images/pin.svg"

export default function Card(props) {
	return (
		<div className="card-container">
			<div className="card-image-container">
				<img className="card-image" src={props.imageUrl} width="300rem" />
			</div>
			<section className="info-container">
				<span className="location-container">
					<img src={pin} />
					<h3>{props.location}</h3>
					<a href={props.googleMapsUrl}>View on OpenStreetMap</a>
				</span>
				<h2>{props.title}</h2>
				<p className="dates">{props.startDate} - {props.endDate}</p>
				<p className="description">{props.description}</p>
			</section>
		</div>
	)
}