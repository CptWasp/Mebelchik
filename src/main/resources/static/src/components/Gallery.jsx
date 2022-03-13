
import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { Link } from 'react-router-dom';
import { ImgSkeleton } from './ImgSkeleton';
import axios, * as others from 'axios';
import { Logo } from './Logo';

export const Gallery = () => {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		sourceIndex: 0
	});

	const [isLoaded, setIsLoaded] = useState(false);
	const [photos, setPhotos] = useState([]);

	const getPhotos = async () => {
		let result = await axios.get('https://jsonplaceholder.typicode.com/photos')
		setPhotos(result.data)
		setIsLoaded(true)
	}

	useEffect(() => {
		getPhotos()
	}, []);


	const openLightboxOnSource = (sourceIndex) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			sourceIndex: sourceIndex
		})
	}

	let urls = photos.map((p) => {
		return p.url
	})
	// const photos = [
	// 	"https://source.unsplash.com/2ShvY8Lf6l0/800x599",
	// 	"https://source.unsplash.com/Dm-qxdynoEc/800x799",
	// 	"https://source.unsplash.com/qDkso9nvCg0/600x799",
	// 	"https://source.unsplash.com/iecJiKe_RNg/600x799",
	// 	"https://source.unsplash.com/epcsn8Ed8kY/600x799",
	// 	"https://source.unsplash.com/NQSWvyVRIJk/800x599",
	// 	"https://source.unsplash.com/zh7GEuORbUw/600x799",
	// 	"https://source.unsplash.com/PpOHJezOalU/800x599",
	// 	"https://source.unsplash.com/I1ASdgphUH4/800x599",
	// 	'https://images.unsplash.com/photo-1640173022647-025eaeed4cf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1537&q=80',
	// 	'https://images.unsplash.com/photo-1640114199344-e65ecabcbc2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	// 	'https://images.unsplash.com/photo-1640095889747-2090ee12fa7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
	// 	'https://images.unsplash.com/photo-1640059618572-771074b9a9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80',
	// 	'https://images.unsplash.com/photo-1640108899708-7a1d204af10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
	// 	'https://images.unsplash.com/photo-1640158615434-39387462eff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	// 	'https://images.unsplash.com/photo-1640168743194-b62d4249dd01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	// 	'https://images.unsplash.com/photo-1612469294274-b1baaf5125ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	// 	'https://images.unsplash.com/photo-1504553101389-41a8f048c3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=823&q=80',
	// 	'https://images.unsplash.com/photo-1617105106017-8a99f99e6b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	// 	'https://images.unsplash.com/photo-1639975721105-98fc58c37822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

	// ];

	// let limitedPhotos = photos.slice(0, 12)
	return (
		<div>
			<div className='img-grid'>
				{isLoaded
					?
					photos.map((photo) => (
						<div
							key={photo.id}
							className='img-wrap'
							onClick={() => openLightboxOnSource(photo.id)}
						>
							<img src={photo.thumbnailUrl} alt="" />

						</div>
					))
					:
					Array(12).fill(<ImgSkeleton className='skeleton' />).map((skeleton, index) => (
						<div
							key={index}
							className='img-wrap'
						>
							{skeleton}
						</div>
					))
				}

				<FsLightbox
					toggler={lightboxController.toggler}
					sourceIndex={lightboxController.sourceIndex}
					sources={urls}
					exitFullscreenOnClose
				/>
			</div>
			<div className='btn-wrapper'>
				<Link to='/gallery'><button className='gallery-btn'>еще</button></Link>
			</div>
		</div>
	);
}

