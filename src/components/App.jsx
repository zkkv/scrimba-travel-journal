import Nav from "./Nav"
import Card from "./Card"
import data from "../../public/data"

export default function App() {
	const cards = data.map(el => <Card key={el.title} {...el} />)

	return (
		<div>
			<Nav />
			{cards}
		</div>
	)
}