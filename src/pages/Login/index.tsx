import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'

export default function Login() {
    return (
        <Layout>
            <h1>Login</h1>
            <Link to={`/home`}>Go to Home</Link>
        </Layout>
    )
}
