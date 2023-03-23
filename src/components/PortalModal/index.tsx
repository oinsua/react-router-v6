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
        const mount = document.getElementById("modal-root")!;
        useLayoutEffect(() => {
            if (mount !== null) {
                mount.appendChild(el);
            }
            return () => {
                if (mount !== null) {
                    mount.removeChild(el)
                }
            };
        }, [el, mount]);
        return isOpen ? createPortal(
            <div className="modal">
                <div className="modal-content">
                    <button className="modal-close" onClick={closeModal}>
                        X
                    </button>
                    {children}
                </div>
            </div>
            , el)
            : null
    }

    return { openModal, closeModal, Modal }
};
