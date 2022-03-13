
import { NavBtn } from "./NavBtn"

export const Nav = ({ setMenuActive }) => {

	return (
		<div>
			<ul className='nav-items'>
				<NavBtn setMenuActive={setMenuActive} route='/' >Home</NavBtn>
				<NavBtn setMenuActive={setMenuActive} route='/order' >Заказать</NavBtn>
				<NavBtn setMenuActive={setMenuActive} route='/gallery' >Галерея</NavBtn>
				<NavBtn setMenuActive={setMenuActive} route='/contacts' >Контакты</NavBtn>
			</ul>
		</div>
	)
}