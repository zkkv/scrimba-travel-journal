import globe from "../../public/images/globe.svg"

export default function Nav() {
	return (
		<nav>
			<img src={globe} />
			<a href="/">travelJ.</a>
		</nav>
	)
}