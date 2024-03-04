import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** Components */
import Layout from '~components/Layout'

/** Routes */
import { HomePage } from '~routes/Home'
import { WorkPage } from '~routes/Work'
import { ErrorRedirect } from '~routes/ErrorRedirect'

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
