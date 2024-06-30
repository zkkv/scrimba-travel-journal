export default function Card(props) {
	return (
		<div className="card-container">
			<img className="card-image" src={props.imageUrl} width="300rem" />
			<section>
				<span>
					<h3>{props.location}</h3>
					<a href={props.googleMapsUrl}>View on Google Maps</a>
				</span>
				<h2>{props.title}</h2>
				<p>{props.startDate} - {props.endDate}</p>
				<p>{props.description}</p>
			</section>
		</div>
	)
}