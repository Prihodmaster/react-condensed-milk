import MilkItem from './MilkItem';

function Purchase(props){
    return(
        <>
        {
            props.data.filter(item=>item.add).length == 0 ?             
                <div className='orders-favorits-empty'>
                    <img src="/images/smile1.png" alt="лого" />
                    <p><b>У вас нет покупок</b></p>
                    <p>Добавьте хотя бы одну баночку в корзину</p>
                    <button onClick={()=>props.onOpenHome(true)}>⮜ Вернуться назад</button>
                </div> : 
                <div>
                    <div className="milk-list-header">
                        <div className="milk-list-text">
                            <button onClick={()=>props.onOpenHome(true)}>⮜</button>
                            <h2> Избранные товары</h2>
                        </div>
                    </div>
                    <div className="milk-list">
                        {
                        props.data.filter(item=>item.add).
                        map(item=><MilkItem data={item} key={item.id} clickHeart={props.clickHeart} clickAddCart={props.clickAddCart}/>)
                        }
                    </div>
                </div>
        }
        </>
    )
}

export default Purchase;