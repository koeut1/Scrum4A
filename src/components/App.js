import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import NavBar from './NavBar'
import LoginForm from './login'
import InscriptionForm from './Inscription'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	
	
	const [isShowLogin, setIsShowLogin]=useState(false)
	const [isShowSignUp, setIsShowSignUp]=useState(false)

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-peinture' className='lmp-logo' />
				<h1 className='lmp-title'>La maison peinture</h1>
				<NavBar setIsShowSignUp={setIsShowSignUp} setIsShowLogin={setIsShowLogin}/>
				<LoginForm isShowLogin={isShowLogin}/>
				<InscriptionForm isShowSignUp={isShowSignUp}/>
			</Banner>
			<div className='lmp-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
