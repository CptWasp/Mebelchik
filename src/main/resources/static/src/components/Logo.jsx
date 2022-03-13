import { Link } from 'react-router-dom'

export const Logo = () => {
	return (
		<div className='logo-title'>
			<Link className='link' to='/'><h2 className='title'>RUSTAM MEBEL</h2></Link>
			<p className='sub-title'>мебельный магазин</p>
		</div>
	)
}
