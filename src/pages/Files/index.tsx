import React, { useState } from 'react'

export default function Files() {
    const [msgError, setMsgError] = useState('')

    function checkImageSize(imageFile: File) {
        const maxSizeInBytes = 512000; // Tamaño máximo en bytes (512KB)
        console.log('image size:', imageFile.size)
        if (imageFile.size > maxSizeInBytes) {
            return false
        }
        return true
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsgError('')
        if (e.target.files) {
            console.log(' e.target.files[0]: ', e.target.files)
            if (!checkImageSize(e.target.files[0])) {
                setMsgError('La imagen es demasiado grande. Por favor, seleccione una imagen más pequeña.')
            }
        }
    }

    return (
        <div>
            <h3>Upload Files</h3>
            <form>
                <input type={'file'} name={`file`} id={`file`} onChange={handleChange} />
                <p id='error'>{msgError}</p>
            </form>
        </div>
    )
}
