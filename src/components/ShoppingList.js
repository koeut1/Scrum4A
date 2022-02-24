import { useState } from 'react'
import { paintList } from '../datas/paintList'
import PlantItem from './PlantItem'
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
	const currentPlantAdded = cart.find((plant) => plant.name === name)
	if (currentPlantAdded) {
		const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		)
		updateCart([
			...cartFilteredCurrentPlant,
			{ name, price, amount: currentPlantAdded.amount + 1 }
		])
	} else {
		updateCart([...cart, { name, price, amount: 1 }])
	}
}

return (
	<div className='lmj-shopping-list'>
		<Categories
			categories={categories}
			setActiveCategory={setActiveCategory}
			activeCategory={activeCategory}
		/>

		<ul className='lmj-plant-list'>
			{paintList.map(({ id, cover, name, support, couleur, contenance, marque, price }) =>
				!activeCategory || activeCategory === support ? (
					<div key={id}>
						<PlantItem
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
