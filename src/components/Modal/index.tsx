import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.css'

type PropsModal = { children: React.ReactNode; onClose: () => void }

function Modal({ children, onClose }: PropsModal) {
    return <div className='modal'>
        <div className='modal-content'>
            <button className='btn' onClick={onClose}>🅧</button>
            {children}
        </div>
    </div>
}

export default function ModalPortal({ children, onClose }: PropsModal) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>
            {children}
        </Modal>,
        document.getElementById('modal-root')!
    )
}