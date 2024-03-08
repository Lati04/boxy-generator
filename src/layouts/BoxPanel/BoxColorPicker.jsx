import React from 'react'
import { useDispatch } from 'react-redux'
import { updateBoxValue } from '../../features/boxProperties'

function BoxColorPicker({inputData}) {
    const dispatch = useDispatch()

    function handleInputs(e){
        dispatch(updateBoxValue({
            inputNumber: inputData.inputNumber,
            value: e.target.value
        }))
    }
    
    return (
        <div className='mt-3'>
            <p>{inputData.name}</p>
            <div className='flex mt-2'>
                <input
                className='flex-grow px-2 py-1 border focus:outline-1 outline-gray-400'
                type='text'
                value={inputData.value}
                onChange={handleInputs}
                />
                <input 
                className='cursor-pointer h-[40px]'
                type='color'
                value={inputData.value}
                onChange={handleInputs}
                />
            </div>
        </div>
    )
}

export default BoxColorPicker;