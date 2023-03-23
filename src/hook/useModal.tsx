import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose} />
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                <div className="modal-content">{children}</div>
            </div>
        </>,
        document.getElementById("modal-root")!
    );
};
