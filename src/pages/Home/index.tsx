import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Drawer from '../../components/TemporaryDrawer'
import '../../components/TemporaryDrawer/styles.css'

export default function Home() {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log('navigate')
        navigate(`/home/users`)
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <h1><Link to={`/home`}>Home</Link></h1>
            <Link to={`/home/users`}>Users</Link>
            <button onClick={handleClick}>Others Users</button>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                Trigger Drawer
            </button>
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                position="right"
            >
                <div className="demo-content">
                    <button type="button" onClick={() => setIsOpen(false)}>
                        Close
                    </button>
                    <p>The drawer content!</p>
                    <input type="text" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum eligendi ratione doloremque debitis fugit, modi architecto distinctio repudiandae alias tenetur consequatur molestiae omnis, placeat blanditiis dolor facere sint dolores!
                </div>
            </Drawer>
            <Outlet />
        </>
    )
}
