import { Link } from "react-router-dom"

export const NavBtn = ({ setMenuActive, children, route }) => {
	return (
		<li onClick={() => setMenuActive(false)} className='nav-item'><Link className='link' to={route}>{children}</Link></li>
	)
}