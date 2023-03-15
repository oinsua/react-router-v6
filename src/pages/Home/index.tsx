import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1><Link to={`/home`}>Home</Link></h1>
            <Link to={`/home/users`}>Users</Link>
            <Outlet />
        </>
    )
}
