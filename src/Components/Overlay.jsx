import React from 'react';
import CartMilkItem from './CartMilkItem';

function Overlay(props){
    return(
    <div className="overlay">
        <div className="wrapper-cart">
          <div className="cart">
          <div className='cart-header'>
            <p>Корзина</p>
            <div className='cart-item-remove' onClick={()=>props.onCloseCart(false)}></div>
            </div>
          <div className='cart-main'>
            {
              props.order ?  
              <div className='cart-completed'>
                <img src="/images/cart-completed.png" alt="лого" />
                <p><b>Заказ оформлен</b></p>
                <p>Ваш заказ №236 скоро будет передан в курьерскую службу</p>
                <button onClick={()=>{
                  props.onCloseCart(false)
                  props.orderChange()
                  }}>⮜ Вернуться назад</button>
              </div>:
              (
                props.data.length == 0 ? 
                <div className='cart-empty'>
                  <img src="/images/cart-empty.png" alt="лого" />
                  <p><b>Корзина пустая</b></p>
                  <p>Добавьте хотя бы одну баночку сгущёнки, чтобы сделать заказ</p>
                  <button onClick={()=>props.onCloseCart(false)}>⮜ Вернуться назад</button>
                </div>
                :
                <>
                  <div className='cart-list'>
                    {props.data.map(item=><CartMilkItem data={item} key={item.id} clickRemove={props.clickRemove} />)}
                  </div>
                  <div className='cart-order'>
                    <div className='cart-order-text'><p>Общая сумма:</p><b>{props.sum} грн.</b></div>
                    {/* <button onClick={props.clearCart}>Оформить заказ ⮞</button> */}
                    <button onClick={props.clearCart}>Оформить заказ ⮞</button>
                  </div>
                </>
              )
            }
          </div>
          </div>
        </div>
      </div>
    )
}

export default Overlay;