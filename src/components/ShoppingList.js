import { useState } from 'react'
import { paintList } from '../datas/paintList'
import PaintItem from './PaintItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = paintList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

function addToCart(name, price) {
	const currentPaintAdded = cart.find((paint) => paint.name === name)
	if (currentPaintAdded) {
		const cartFilteredCurrentPaint = cart.filter(
			(paint) => paint.name !== name
		)
		updateCart([
			...cartFilteredCurrentPaint,
			{ name, price, amount: currentPaintAdded.amount + 1 }
		])
	} else {
		updateCart([...cart, { name, price, amount: 1 }])
	}
}

return (
	<div className='lmp-shopping-list'>
		<Categories
			categories={categories}
			setActiveCategory={setActiveCategory}
			activeCategory={activeCategory}
		/>

		<ul className='lmp-paint-list'>
			{paintList.map(({ id, cover, name, support, couleur, contenance, marque, price }) =>
				!activeCategory || activeCategory === support ? (
					<div key={id}>
						<PaintItem
							cover={cover}
							name={name}
							support={support}
							couleur={couleur}
							contenance={contenance}
							marque={marque}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				) : null
			)}
		</ul>
	</div>
)
}

export default ShoppingList
