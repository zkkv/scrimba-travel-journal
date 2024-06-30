import Nav from "./Nav"
import Card from "./Card"
import data from "../../public/data"
import Divider from "./Divider"

export default function App() {
	const cards = data.map((el, idx) =>
		<div key={idx}>
			<Card
				{...el}
			/>
			{idx < data.length - 1 && <Divider />}
		</div>
	)

	return (
		<div id="top-level-container">
			<Nav />
			<div id="list-container">{cards}</div>
		</div>
	)
}