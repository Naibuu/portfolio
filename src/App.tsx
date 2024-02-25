import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** Components */
import Layout from '~components/Layout'

/** Routes */
import Home from '~routes/Home'
import NotFound from '~routes/404'

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
