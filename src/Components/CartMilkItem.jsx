import React from 'react';

function CartMilkItem(props){
    return(
        <div className='cart-item'>
            <div className='cart-item-logo'><img src={props.data.logo} alt="лого" /></div>
            <div className='cart-item-text'><p>{props.data.title}</p><p><b>{props.data.price} грн.</b></p></div>
            <div className='cart-item-remove' onClick={()=>props.clickRemove(props.data.id)}></div>
        </div>
    )
}

export default CartMilkItem;