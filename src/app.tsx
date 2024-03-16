import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'

/** Components */
import Layout from '~components/layout'

/** Routes */
import { HomePage } from '~routes/home'
import { WorkPage } from '~routes/work'
import { ErrorRedirect } from '~routes/errorRedirect'

export default function App() {
    return (
        <BrowserRouter>
            <Toaster />
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
