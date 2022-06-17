import MilkItem from './MilkItem';

function Favorites(props){
    return(
        <>
        {
            props.data.filter(item=>item.like).length == 0 ?             
                <div className='orders-favorits-empty'>
                    <img src="/images/smile2.png" alt="лого" />
                    <p><b>У вас нет ничего в избранном</b></p>
                    <p>Добавьте хотя бы одну баночку в избранное</p>
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
                        props.data.filter(item=>item.like).
                        map(item=><MilkItem data={item} key={item.id} clickHeart={props.clickHeart} clickAddCart={props.clickAddCart}/>)
                        }
                    </div>
                </div>
        }
        </>
    )
}

export default Favorites;