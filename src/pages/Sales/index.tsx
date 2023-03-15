import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './sales.module.css'

export default function Sales() {
    return (
        <>
            <h1>Sales</h1>
            <nav>
                <ul className={styles.ulnav}>
                    <li><Link to={`/sales/overview`}>Overview</Link></li>
                    <li><Link to={`/sales/subscriptions`}>Subscriptions</Link></li>
                    <li><Link to={`/sales/Invoices`}>Invoices</Link></li>
                    <li><Link to={`/sales/customers`}>Customers</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
