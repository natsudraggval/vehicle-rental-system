import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routes/MyRoutes.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID = "726892378643-uf64puejo1948ha50cg037mmuoda0sck.apps.googleusercontent.com"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={ CLIENT_ID }>
    <BrowserRouter>
        <MyRoutes />
    </BrowserRouter>
    </GoogleOAuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
