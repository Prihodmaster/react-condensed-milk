import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import MilkItem from './Components/MilkItem';
import MilkListHeader from './Components/MilkListHeader';
import Overlay from './Components/Overlay';
import Favorites from './Components/Favorites';
import Purchase from './Components/Purchase';


const milkItems = [
  {
    id: '0',
    logo: '/images/milk0.jpg',
    title: 'Молоко сгущённое цельное, Первомайск 380 г',
    price: 43,
    like: false,
    add: false
  },

  {
    id: '1',
    logo: '/images/milk1.jpg',
    title: 'Сгущенное кокосовое молоко Natures Charm 320 г',
    price: 147,
    like: false,
    add: false
  },

  {
    id: '2',
    logo: '/images/milk2.jpg',
    title: 'Молоко вареное сгущённое Ириска, 530 г',
    price: 78,
    like: false,
    add: false
  },

  {
    id: '3',
    logo: '/images/milk3.jpg',
    title: 'Продукт молокосодержащий с сахаром',
    price: 120,
    like: false,
    add: false
  },

  {
    id: '4',
    logo: '/images/milk4.jpg',
    title: 'Молоко цельное сгущённое с сахаром 5% (ГОСТ)',
    price: 770,
    like: false,
    add: false
  },

  {
    id: '5',
    logo: '/images/milk5.jpg',
    title: 'Молоко цельное сгущенное с сахаром 8,5%  300г',
    price: 59,
    like: false,
    add: false
  },

  {
    id: '6',
    logo: '/images/milk6.jpg',
    title: 'Сгущенное овсяное молоко Natures Charm 320г',
    price: 195,
    like: false,
    add: false
  },

  {
    id: '7',
    logo: '/images/milk7.jpg',
    title: 'Молоко сгущенное вареное с ароматом фундука 500г',
    price: 73,
    like: false,
    add: false
  },

  {
    id: '8',
    logo: '/images/milk8.jpg',
    title: 'Кокосовое  молоко на тростниковом сахаре Bi food 240г',
    price: 98,
    like: false,
    add: false
  },

  {
    id: '9',
    logo: '/images/milk9.jpg',
    title: 'Молоко вареное сгущённое Ириска З/Б 370Г. Первомайский ',
    price: 72,
    like: false,
    add: false
  },

  {
    id: '10',
    logo: '/images/milk10.jpg',
    title: 'Рисовое молоко на тростниковом BiFood 240 г',
    price: 123,
    like: false,
    add: false
  },

  {
    id: '11',
    logo: '/images/milk11.jpg',
    title: 'Упаковка молока сгущенного  с сахаром и кофе 7% 370 г',
    price: 152,
    like: false,
    add: false
  },

  {
    id: '12',
    logo: '/images/milk12.jpg',
    title: 'Молоко сгущенное цельное Steinhauer Германия 1000 г',
    price: 249,
    like: false,
    add: false
  },

  {
    id: '13',
    logo: '/images/milk13.jpg',
    title: 'Молоко цельное сгущенное вареное Сладосвіт 500г',
    price: 59,
    like: false,
    add: false
  },

  {
    id: '14',
    logo: '/images/milk14.jpg',
    title: 'Молоко сгущенное вареное "Ириска" рукав 3 кг',
    price: 330,
    like: false,
    add: false
  },

  {
    id: '15',
    logo: '/images/milk15.jpg',
    title: 'Молоко сгущене варене ІРИСКА "Полтавочка" 570г',
    price: 86,
    like: false,
    add: false
  }
]

let sumCartItems = 0;
function App() {
  const [milkItemList, setMilkItemList] = useState(milkItems);
  const [cartItemList, setCartItemList] = useState([]);
  const [homeVisible, setHomeVisible] = useState(true);
  const [CartVisible, setCartVisible] = useState(false);
  const [favoriteVisible, setFavoriteVisible] = useState(false);
  const [purchaseVisible, setPurchaseVisible] = useState(false);
  const [sumCartValue, setSumCartValue] = useState(sumCartItems);
  const [order, setOrder] = useState(false);

  const clickLike = (id) => {
    let likesArr = milkItemList.map(item=>item.id===id ? { ...item, like: !item.like } : item )
    setMilkItemList(likesArr)
  }

  const clickAdd = (id) => {
    clickAddVisible(id)
    milkItemList.forEach(item=>{item.id===id && (!item.add  ? addCartItem(id) : removeCartItem(id))})
  }

  const clickAddVisible = (id) => {
    let cartArrAdd = milkItemList.map(item=>item.id===id ? { ...item, add: !item.add } : item)
    setMilkItemList(cartArrAdd)
  }

  const addCartItem = (id) => {
    let cartArr = milkItemList.find(item=>item.id===id && item )
    setCartItemList([...cartItemList, cartArr])
    calcSumCart(id, "plus")
  }

  const removeCartItem = (id) => {
    clickAddVisible(id)
    let cartArr = cartItemList.filter(item=>item.id !== id);
    setCartItemList(cartArr)
    calcSumCart(id, "minus")
  }

  const clearCart = () => {
    setMilkItemList(milkItemList.map(item=>item = { ...item, add: false }))
    setCartItemList([])
    sumCartItems = 0
    setSumCartValue(sumCartItems)
    setOrder(true)
  }

  const orderChange = () => setOrder(false)
  const openCart = visible => setCartVisible(visible)
  const closeCart = visible => setCartVisible(visible)

  const calcSumCart = (id, sign) => {
    sign==="plus" && milkItemList.forEach(item=>item.id===id ? sumCartItems += item.price : item)
    sign==="minus" && milkItemList.forEach(item=>item.id===id ? sumCartItems -= item.price : item)
    setSumCartValue(sumCartItems)
  }

  const inputText = text => {
    let arr = milkItems.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setMilkItemList(arr)
    console.log(text)
  }

  const openHome = (visible) => {
    setHomeVisible(visible)
    setPurchaseVisible(!visible)
    setFavoriteVisible(!visible)
  }

  const openFavorites = (visible) => {
    setFavoriteVisible(visible)
    setHomeVisible(!visible)
    setPurchaseVisible(!visible)
  }

  const openPurchase = (visible) => {
    setPurchaseVisible(visible)
    setHomeVisible(!visible)
    setFavoriteVisible(!visible)
  }

  return (
      <div className="App">
        {CartVisible && 
        <Overlay 
        data={cartItemList} 
        clickRemove={removeCartItem} 
        onCloseCart={closeCart} 
        sum={sumCartValue} 
        clearCart={clearCart} 
        order={order}
        orderChange={orderChange}
        />}
        <div className='wrapper-main'>
          <Header onOpenCart={openCart} onOpenFavorites={openFavorites} onOpenPurchase={openPurchase} onOpenHome={openHome} sum={sumCartValue} />
          <div className='wrapper'>
            {
              homeVisible && 
              <div className="wrapper-list">
                <MilkListHeader inputValue={inputText}/>
                <div className="milk-list">
                  {
                    milkItemList.map(item=><MilkItem data={item} key={item.id} clickHeart={clickLike} clickAddCart={clickAdd} />)
                  }
                </div>
              </div>
            }
            {favoriteVisible && <Favorites data={milkItemList} onOpenHome={openHome} clickHeart={clickLike} clickAddCart={clickAdd}/>}
            {purchaseVisible && <Purchase data={milkItemList} onOpenHome={openHome} clickHeart={clickLike} clickAddCart={clickAdd}/>}
          </div>
        </div>
      </div>
  );
}

export default App;
