import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Nav } from './Nav'

function Header() {
	const [menuActive, setMenuActive] = useState(false)
	return (
		<>
			<div className='header'>
				<div className='logo'>
					<Logo />
					<div>
						<div className="header-burger" onClick={() => setMenuActive(true)}>
							<span className="burger-line burger-line_first"></span>
							<span className="burger-line burger-line_second"></span>
							<span className="burger-line burger-line_third"></span>
						</div>
					</div>
				</div>
			</div>
			<div className='nav-wrapper'>
				<nav className={menuActive ? 'nav nav-active' : 'nav'}>
					<Nav setMenuActive={setMenuActive} />
					<div className="nav-close" onClick={() => setMenuActive(false)}>
						<span className="nav-close-line"></span>
						<span className="nav-close-line"></span>
					</div>
					<div>
					</div>
				</nav>
			</div>
		</>
	)
}

export default Header
