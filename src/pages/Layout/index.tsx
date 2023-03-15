import React from 'react'
import { Link } from 'react-router-dom'
import styles from './layout.module.css'

export default function Layout({ children }: any) {
    return (
        <div className={styles.wrapper}>
            <aside className={styles.aside}>
                <header className={styles.title}>FakeBooks</header>
                <nav>
                    <ul className={styles.ul}>
                        <li><Link to={`/home`}>Home</Link></li>
                        <li><Link to={`/account`}>Accounts</Link></li>
                        <li><Link to={`/sales/overview`}>Sales</Link></li>
                        <li>Expenses</li>
                        <li>Reports</li>
                    </ul>
                </nav>
            </aside>
            <main className={styles.main}>
                {
                    children
                }
            </main>
        </div>

    )
}
