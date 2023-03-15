import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Layout from '../Layout'
import styles from './account.module.css'

export default function Account() {
    return (
        <Layout>
            <h1>Account</h1>
            <nav>
                <ul className={styles.ulnav}>
                    <li><Link to={`/account/users`}>Users</Link></li>
                </ul>
            </nav>
            <Outlet />
        </Layout>
    )
}
