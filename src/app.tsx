import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** Components */
import Layout from '~components/layout'

/** Routes */
import { HomePage } from '~routes/home'
import { WorkPage } from '~routes/work'
import { ErrorRedirect } from '~routes/errorRedirect'

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/work" element={<WorkPage />} />
                    <Route path="*" element={<ErrorRedirect />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
