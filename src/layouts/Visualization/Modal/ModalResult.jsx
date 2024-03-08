import React from 'react'
import getBoxShadowValue from '../../../utils/getBoxShadowValue'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'

function ModalResult({closeModal}) {
    const shadowValues = useSelector(state => state.shadows)

    useEffect(() => {
       document.body.style.overflow = 'hidden' 
       
       return () => document.body.style.overflow = 'auto' 
    }, [])

    let runningAnimation = false
    function handleCopy(e) {
        if(!runningAnimation) {
            runningAnimation = true
            e.target.textContent = "Copied !"

            setTimeout(() => {
                e.target.textContent = "Copy"
                runningAnimation = false
            }, 1250)
        }

        navigator.clipboard.writeText(`box-shadow: 
        ${getBoxShadowValue(shadowValues)}`)
    }
    
    return (
        <div 
        onClick={closeModal}
        className='fixed inset-0 z-10 flex items-center justify-center bg-gray-600/75'>
            <div
            onClick={e => e.stopPropagation()}
            className='max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]'
            >
                <div className='flex mb-5 item-end'>
                    <p className='mr-5 font-semibold'>Here is your code &#x2764;&#xFE0F;&#x200D;&#x1F525;</p>
                    <button
                    onClick={handleCopy}
                    className='px-3 py-1 ml-auto mr-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700'>
                        Copy
                    </button>
                    <button
                    onClick={closeModal}
                    className='px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700'>
                        Close
                    </button>
                </div>
                <p className='p-5 bg-gray-100 rounded'>
                    <span className='font-semibold'>box-shadow : </span>
                    <span>{getBoxShadowValue(shadowValues)}</span>
                </p>
            </div>

        </div>
    )
}

export default ModalResult;