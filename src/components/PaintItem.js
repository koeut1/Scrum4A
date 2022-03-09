import CareScale from './CareScale'
import '../styles/PaintItem.css'

function handleClick(paintName) {
	alert(`Vous voulez acheter 1 ${paintName}? Très bon choix 🎨✨`)
}

function PaintItem({ cover, name, water, light, price }) {
	return (
		<li className='lmp-paint-item' onClick={() => handleClick}>
			<span className='lmp-paint-item-price'>{price}€</span>
			<img className='lmp-paint-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PaintItem
