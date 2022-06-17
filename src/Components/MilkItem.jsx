import React from 'react';

function MilkItem(props){
    return(
        <div className="milk-item">
            <div className={props.data.like ? 'milk-item-heart active' : 'milk-item-heart'} onClick={()=>props.clickHeart(props.data.id)}></div>
            <div className='milk-item-logo'><img src={props.data.logo} alt="лого" /></div>
            <div className='milk-item-text'><p>{props.data.title}</p></div>
            <div className='milk-item-price'>
            <div>
                <p><span>ЦЕНА</span></p>
                <p><b>{props.data.price} грн.</b></p>
                </div>
                <div className={props.data.add ? 'milk-item-add active' : 'milk-item-add'} onClick={()=>props.clickAddCart(props.data.id)}></div>
            </div>
        </div>
    )
}

export default MilkItem;