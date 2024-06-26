import Layout from './components/layout'
import Hero from './components/sections/hero'
import Work from './components/sections/work'
import Contact from './components/sections/contact'

export default function App() {
    return (
        <Layout>
            <Hero />
            <Work />
            <Contact />
        </Layout>
    )
}
