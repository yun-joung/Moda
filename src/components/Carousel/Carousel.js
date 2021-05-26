import React, {useState} from 'react';
import '../../style/index.scss';
import {images} from './CarouselData';

function Caroucel() {
    const [currImg, setCurrimg] = useState(1)
    return (
        <div className="carousel">
                <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
                <div className="left">
                    <div className="Arrow" onClick={()=> {currImg > 0 && setCurrimg(currImg - 1)}}>
                        {currImg > 0 ?  
                            <>
                            <i className="fas fa-chevron-left leftIcon"></i>
                            <p className="arrowText">{images[currImg-1].title}</p> 
                            </>
                        : " "
                        }
                    </div>
                </div>
                <div className="center"></div>
                <div className="right">
                    <div className="Arrow" onClick={()=> {currImg < images.length -1 &&setCurrimg(currImg + 1)}}>
                        {currImg < images.length -1 ?  
                            <>
                            <i className="fas fa-chevron-right rightIcon"></i>
                            <p className="arrowText">{images[currImg+1].title}</p>
                            </>
                        : " "
                        }
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Caroucel
