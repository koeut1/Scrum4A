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
	const handleLoginClick =()=>{
		setIsShowLogin((isShowLogin)=> !isShowLogin)
	}
	const handleSignUpClick=()=>{
		setIsShowSignUp((isShowSignUp)=> !isShowSignUp)
	}
	const [isShowLogin, setIsShowLogin]=useState(false)
	const [isShowSignUp, setIsShowSignUp]=useState(false)

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison peinture</h1>
				<NavBar handleLoginClick={handleLoginClick}/>
				<LoginForm isShowLogin={isShowLogin}/>
				<InscriptionForm isShowSignUp={isShowSignUp}/>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
