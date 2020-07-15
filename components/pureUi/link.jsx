import Link from "next/link"

const CustomLink = ({children, link, ln}) => (
	<Link
		href={link.abs ? link.href : `/[lang]${link.href}`}
		as={link.abs ? link.as : `/${ln}${link.as}`}
	>
		<a className="capitalize">{children}</a>
	</Link>
)
export default CustomLink
