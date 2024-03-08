import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCheckbox } from '../../features/shadows'

function ShadowCheckbox({name, shadowID}) {
    const checkboxShadow = useSelector(state => state.shadows.find
        (shadow => shadow.id  === shadowID))
    
    const dispatch = useDispatch()
    return (
        <div>
            <input
            onChange={() => dispatch(updateCheckbox({shadowID, name}))}  
            type="checkbox"
            checked={checkboxShadow[name]}
            id={`checkbox-${name}-${shadowID}`}
            className='w-4 h-4 mr-2 border-gray-300 rounded'
            />
            <label 
            className='mr-5 leading-4'
            htmlFor={`checkbox-${name}-${shadowID}`}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
        </div>
    );
}

export default ShadowCheckbox;