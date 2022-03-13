import { Link } from "react-router-dom"
import telegramIco from '../assets/3787425_telegram_logo_messanger_social_social media_icon.png'
import whatsappIco from '../assets/3225179_app_logo_media_popular_social_icon.png'
import vkIco from '../assets/3787324_vkontakte_brand_logo_social media_vk_icon.png'

function Footer() {
	return (
		<div className='img-full'>
			<div className='bigger-logo'>
				<Link className='link' to='/'><h1 className='bigger-title'>RUSTAM MEBEL</h1></Link>
				<div className='bigger-sub-title'>мебельный магазин</div>
			</div>
			<div className='contacts-subtitle'>
				Связаться с нами
			</div>
			<div className='line'></div>
			<div>
				<h1 className="number">+7 904 678 48 72</h1>
				<div className="sm">
					<a><img className="sm-ico" src={telegramIco} /></a>
					<a><img className="sm-ico" src={whatsappIco} /></a>
					<a href="https://vk.com/feed"><img className="sm-ico" src={vkIco} /></a>
				</div>
			</div>

		</div>
	)
}

export default Footer