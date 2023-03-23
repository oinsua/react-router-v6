import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './layout.module.css'
/* import { Modal } from '../../hook/useModal'
import ModalPortal from '../../components/Modal'; */
import { usePortal } from '../../components/PortalModal';


export default function Layout({ title = 'FakeBooks' }: { title?: string; }) {
    /* const [isOpen, setIsOpen] = useState(false);
    const [isOpenO, setIsOpenO] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    const closeModalO = () => setIsOpenO(false);
    const openModalO = () => setIsOpenO(true); */

    const { Modal, openModal } = usePortal()

    return (
        <div className={styles.wrapper}>
            <aside className={styles.aside}>
                <header className={styles.title}>{title}</header>
                <nav>
                    <ul className={styles.ul}>
                        <li><Link to={`/home`}>Home</Link></li>
                        <li><Link to={`/account`}>Accounts</Link></li>
                        <li><Link to={`/sales/overview`}>Sales</Link></li>
                        <li><Link to={`/file`}>Files</Link></li>
                        <li>Reports</li>
                    </ul>
                </nav>
                <button onClick={openModal}>Open Portal Modal</button>
                <Modal>
                    <h1>Lorem ipsum dolor sit amet </h1>
                </Modal>
                {/* <button onClick={openModal}>Open Modal</button>
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <h1>Modal</h1>
                </Modal>
                <button onClick={openModalO}> Other Modal</button>
                {
                    isOpenO && <ModalPortal onClose={closeModalO}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus eos sunt similique facere, natus, sed repellat corrupti nemo nihil ratione obcaecati modi delectus necessitatibus aut earum consequatur dolore laudantium.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, minus natus, nostrum, dolorem fugit vero doloribus ducimus inventore quis animi aperiam tempore ullam in rerum maiores culpa error repellat recusandae!
                        </p>
                    </ModalPortal>
                } */}
            </aside>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>

    )
}
