import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './layout.module.css'

export default function Layout() {
    return (
        <div className={styles.wrapper}>
            <aside className={styles.aside}>
                <header className={styles.title}>FakeBooks</header>
                <nav>
                    <ul className={styles.ul}>
                        <li><Link to={`/home`}>Home</Link></li>
                        <li><Link to={`/account`}>Accounts</Link></li>
                        <li><Link to={`/sales/overview`}>Sales</Link></li>
                        <li><Link to={`/file`}>Files</Link></li>
                        <li>Reports</li>
                    </ul>
                </nav>
            </aside>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>

    )
}
