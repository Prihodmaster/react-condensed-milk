import React, {useState, useEffect} from 'react';

const position = 0;
function Slider (){
    const [slide, setSlide] = useState(position);

    useEffect(()=>{
        setTimeout(arrowRightClick, 10000)
    }, [])

    const arrowLeftClick = ()=> {
        setSlide(slide+20)
        slide===0 && setSlide(-80)
    }
    const arrowRightClick = ()=> {
        setSlide(slide-20)
        slide===-80 && setSlide(0)
    }

    return(
        <div className="wrapper-slider">
            <div className="slider">
                <img src={require('../images/arrow_left.png')} alt="назад" className='slider-left' onClick={arrowLeftClick}/>
                <div className="wrapper-slider-list">
                    <div className="slider-list" style={{left: slide+'%'}}>
                        <div className="slider-item item-1"></div>
                        <div className="slider-item item-2"></div>
                        <div className="slider-item item-3"></div>
                        <div className="slider-item item-4"></div>
                        <div className="slider-item item-5"></div>
                    </div>
                </div>
               <img src={require('../images/arrow_right.png')} alt="вперёд" className='slider-right' onClick={arrowRightClick}/>
            </div>
        </div>
    )
}

export default Slider;