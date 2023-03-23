import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export function useModal(): [React.FC<ModalProps>, (data: T) => void] {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);;

    const openModal = () => setIsOpen(true);


    const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
        useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }, [isOpen]);

        return isOpen ? createPortal(
            <div>
                {/* Aquí el contenido del modal */}
                {children}
                <button onClick={handleConfirm}>Confirmar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>, document.getElementById('modal-root')!
        ) : null;
    };

    return [Modal, openModal];
}