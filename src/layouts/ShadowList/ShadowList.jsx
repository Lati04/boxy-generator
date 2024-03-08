import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Shadow from './Shadow'
import { addShadow } from '../../features/shadows'

function ShadowList() {
    const shadows = useSelector(state => state.shadows)
    const dispatch = useDispatch()
    
    return (
        <div>
            <div className='flex justify-between p-6 border-b border-gray-300'>
                <p className='text-lg font-bold'>Customize Shadows</p>
                <button 
                onClick={() => dispatch(addShadow())}
                className='px-3 py-1 text-sm text-white bg-blue-600 rounded focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-700'
                >Add a shadow</button>
            </div>
            <ul>
                {shadows.map((shadow, index) => (
                    <Shadow
                    panelNumber={index + 1}
                    shadow={shadow}
                    key={shadow.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShadowList