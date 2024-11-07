import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Inputcomponent from '../Inputcomponent/Inputcomponent';
import Buttoncomponent from '../Buttoncomponent/Buttoncomponent';

const Buttoninputsearch = (props) => {
    const {
        size,
        placeholder,
        textButton,
        bordered,
        backgroundColorInput = '#fff',
        backgroundColorButtton = 'rgb(13, 92, 182)',
        colorButton = '#fff',
        value,          // Thuộc tính value để kiểm soát giá trị nhập vào
        onChange        // Thuộc tính onChange để xử lý sự kiện thay đổi
    } = props;

    return (
        <div style={{ display: 'flex' }}>
            <Inputcomponent
                size={size}
                placeholder={placeholder}
                style={{
                    backgroundColor: backgroundColorInput,
                    border: bordered ? '1px solid #000' : 'none'
                }}
                value={value}          // Truyền giá trị hiện tại vào Inputcomponent
                onChange={onChange}    // Truyền hàm xử lý sự kiện thay đổi
            />
            <Buttoncomponent
                size={size}
                styleButton={{
                    background: backgroundColorButtton,
                    border: bordered ? '1px solid #000' : 'none'
                }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    );
}

export default Buttoninputsearch;
