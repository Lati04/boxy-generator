import React from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalResult from './ModalResult'

function ModalBtn() {
    const [showModal, setShowModal] = useState(false)
    
    
    return (
        <>
            <button 
            onClick={() => setShowModal(!showModal)}
            className='relative z-0 px-3 py-1 mx-auto mt-2 text-sm text-white bg-blue-600 rounded cursor-pointer hover:bg-blue-700'>
                Get the code
            </button>
            {showModal && 
            createPortal(
                <ModalResult closeModal={() => setShowModal (!showModal)} />,
                document.body
            )}
        </>
    )
}

export default ModalBtn;