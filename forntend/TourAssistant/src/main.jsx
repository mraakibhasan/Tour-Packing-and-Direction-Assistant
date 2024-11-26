
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// ====== Tanstack  Query ====== //
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queeryClient =  new QueryClient()

createRoot(document.getElementById('root')).render(
 
    <QueryClientProvider client={queeryClient}>
    <App />
    <ReactQueryDevtools/>
    </QueryClientProvider>
 
)
