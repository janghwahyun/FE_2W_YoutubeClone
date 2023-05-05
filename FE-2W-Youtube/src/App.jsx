import './App.css'
import { Outlet } from 'react-router-dom'
import SearchHeader from './components/SearchHeader'

function App() {
    return (
        <>
            <SearchHeader />
            {/* children과 같은 효과 ! ✨ */}
            <Outlet />
        </>
    )
}

export default App
