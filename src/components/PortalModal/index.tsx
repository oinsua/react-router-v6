import React, { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import './Modal.css'

type PropsModal = {
    children: React.ReactNode;
    isOpen: boolean;
}

export const usePortal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const Modal = ({ children }: { children: React.ReactNode }) => {
        const el = document.createElement("div");
        useLayoutEffect(() => {
            el.setAttribute('id', 'portal-root')
            if (el !== null) {
                document.body.appendChild(el);
            }
            return () => {
                if (el !== null) {
                    document.body.removeChild(el)
                }
            };
        }, [el]);
        return isOpen ? createPortal(
            <div className="modal">
                <div className="modal-content">
                    {children}
                </div>
            </div>
            , el)
            : null
    }

    return { openModal, closeModal, Modal }
};
