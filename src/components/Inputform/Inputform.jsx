import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const Inputform = (props) => {
    const [valueInput, setvalueInput] = useState(' ')
    const { placeholder = 'Nhập text', ...rests } = props
    return (
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} />
    )
}

export default Inputform