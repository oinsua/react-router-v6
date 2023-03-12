import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Layout from '../Layout'

export default function Home() {
    return (
        <Layout>
            <h1><Link to={`/home`}>Home</Link></h1>
            <Link to={`/home/users`}>Users</Link>
            <Outlet />
        </Layout>
    )
}
