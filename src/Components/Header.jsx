import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(props){
    return(
        <header>
            <div className="header-left" onClick={()=>props.onOpenHome(true)}>
                <img src="/images/logo.png" alt="лого" />
                <div>
                    <h3>CONSENDED MILK</h3>
                    <p>Лучшая сгущёнка онлайн</p>
                </div>
            </div>
            <div className="header-right">
                <div className='cart-link' onClick={()=>props.onOpenCart(true)}>
                    <img src="/images/cart.png" alt="корзина" />
                    <p><b>{props.sum} грн.</b></p>
                </div>
            <img src="/images/heart.png" alt="избранное" onClick={()=>props.onOpenFavorites(true)}/>
            <img src="/images/user.png" alt="юзер" onClick={()=>props.onOpenPurchase(true)} />
            </div>
        </header>
    )
}

export default Header;