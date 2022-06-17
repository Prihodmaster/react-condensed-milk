import React, {useState} from 'react';

function MilkListHeader(props){
    const [inputValue, setInputValue] = useState('');
    const textInput = text => {
        props.inputValue(text)
        setInputValue(text)
    }
    const clearInput = () => {
        setInputValue('')
        props.inputValue('')
    }
    return(
        <div className="milk-list-header">
            <div className="milk-list-text">
                <h2>Весь ассортимент</h2>
            </div>
            <div className="milk-list-input">
                <img src="/images/search.png" alt="поиск" />
                <input type="text" onChange={event=>textInput(event.target.value)} placeholder="Поиск..." value={inputValue} />
                {
                    inputValue != '' && <img className='input-btn' src="/images/remove.png" alt="поиск" onClick={clearInput}/>
                }
            </div>
        </div>
    )
}

export default MilkListHeader;
