import React from 'react'
import Headercomponent from '../Headercomponent/Headercomponent'

const Defaultcomponent = ({ children }) => {
    return (
        <div>
            <Headercomponent />
            {children}
        </div>
    )
}

export default Defaultcomponent