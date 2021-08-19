import {FC} from 'react'
import "./App.css";
import {Body} from './components/Body'
import {Navbar} from './components/Navbar'
export const App:FC = () => {
    return (
        <main>
            <Navbar/>
            <Body/>
        </main>
    )
}
