import Header from './header'
import Footer from './footer'

const Layout = ({ Component }) => (
	<>
		<Header />
		{Component}
		<Footer />
	</>
)
export default Layout