import React from 'react'
import { useState, useEffect } from 'react'
import chevron from "../../assets/chevron.svg"
import ShadowRange from './ShadowRange'
import ShadowColorPicker from './ShadowColorPicker'
import ShadowCheckbox from './ShadowCheckbox'
import { removeShadow } from '../../features/shadows'
import { useDispatch } from 'react-redux'

function Shadow({panelNumber, shadow}) {
    const dispatch = useDispatch()
    const [toggleShadow, setToggleShadow] = useState(false)

    useEffect(() => {
        if(panelNumber === 1){
            setToggleShadow(true)
        }
    }, [])

    const shadowInputs = shadow.inputs.map((input, index) => {
        if(input.type === "range") {
            return <ShadowRange 
            key={index} 
            inputData={shadow.inputs[index]} 
            shadowID={shadow.id}
            />
        }
        else if(input.type === "color") {
            return <ShadowColorPicker 
            key={index} 
            inputData={shadow.inputs[index]}
            shadowID={shadow.id}
            />
        }
    })
    return (
        <li className='border-b border-gray-300 bg-gray-50'>
            <button
            className='flex items-center justify-between w-full px-6 py-4 hover:bg-gray-100'
            onClick={() => setToggleShadow(!toggleShadow)}
            >
                <span>Shadow {panelNumber}</span>
                <img 
                style={{
                    transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`
                }}
                className='w-3 font-bold'
                src={chevron} 
                alt="" />
            </button>
            {toggleShadow && <>
               <div className='flex items-end px-6 pt-4'>
                   <ShadowCheckbox name={"active"} shadowID={shadow.id} />
                   <ShadowCheckbox name={"inset"} shadowID={shadow.id} />
                   <button 
                   onClick={() => dispatch(removeShadow(shadow.id))}
                   className='px-3 py-1 ml-auto text-sm text-white bg-red-600 rounded hover:bg-red-700'
                   >Remove</button>
               </div>
               <div className='px-6 py-4'>
                {shadowInputs}
               </div>
            </>}
        </li>
    )
}

export default Shadow;