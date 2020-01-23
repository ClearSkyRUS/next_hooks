import Link from 'next/link'

const CustomLink = ({ children, link, ln }) => {
    return (
        <Link href={link.abs ? link.path : `/[lang]${link.path}`}
            as={link.abs ? link.path : `/${ln}${link.path}`}>
            <a>{children}</a>
        </Link>
    )
}

export default CustomLink