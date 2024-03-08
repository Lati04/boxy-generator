import React from 'react'
import { useSelector } from 'react-redux'
import BoxRange from './BoxRange'
import BoxColorPicker from './BoxColorPicker'

function BoxPanel() {
    const boxState = useSelector(state => state.boxProperties)

    const boxInputs = boxState.map((input, index) => {
        if(input.type === "range") {
            return <BoxRange key={index} inputData={input} />
        }
        else if(input.type === "color") {
            return <BoxColorPicker key={index} inputData={input}/>
        }
    })

    return (
        <div className='px-6 py-4 border-b border-gray-300 bg-gray-50'>
            <p className='my-2 text-lg font-bold'>Box properties</p>
            {boxInputs}
        </div>
    )
}

export default BoxPanel