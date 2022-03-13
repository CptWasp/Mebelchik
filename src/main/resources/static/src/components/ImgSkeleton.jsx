import ContentLoader from "react-content-loader"

export const ImgSkeleton = (props) => (
	<ContentLoader
		speed={2}
		width={418}
		height={418}
		viewBox="0 0 418 418"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="0" ry="0" width="418" height="418" />
	</ContentLoader>
)

