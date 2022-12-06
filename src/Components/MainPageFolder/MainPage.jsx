import "./MainPage.css";
import data from '../data';
import ContainerItem from "../ContainerItem";
import Slideshow from "../Slideshow/Slideshow";
import { useState, useEffect } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MainPage() {
    const [list, setlist] = useState([]);  
    
    useEffect(() => {
            axios.get('http://demoapiiii.somee.com/api/ServiceController/GetAllSP')
            .then(res => setlist(res.data))                 
    },[]);

    let settings = {
        arrows:true,
        infinite: true,
        speed:1000,
        slidesToShow:3,
        slidesToScroll:1,
    };
    return (
        <div className="mainPage">
            <Slideshow/>
            <div className="newProducts">
                <h3 className="newProducts_name title-name">Sản phẩm mới</h3>
                <div className="newProducts_product product">
                <Slider {...settings}>

                {list.map((item,index)=> item.loai==="keyboard" &&<ContainerItem price={item.price} name={item.name} img={item.hinh} maSp={item.maSp}/>)}
                </Slider>
                   
                </div>
            </div>
            <div className="newProducts_product"></div>

            <div className="bestSeller">
                <h3 className="bestSeller_name title-name">Bán chạy</h3>
                <div className="bestSeller_product product">
                <Slider {...settings}>
                    {list.map((item,index)=> item.loai==="loa"
                    &&<ContainerItem price={item.price} name={item.name} img={item.hinh} maSp={item.maSp}/>)} 
                </Slider>

                </div>
            </div>

            <div className="onSale">
                <h3 className="onSale_name title-name">Giảm giá</h3>
                <div className="onSale_product product">
                <Slider {...settings}>

                    {list.map((item,index)=> item.loai==="sacDp"
                    &&<ContainerItem price={item.price} name={item.name} img={item.hinh} maSp={item.maSp}/>)}  
                </Slider>

                </div>
            </div>
        </div>
    )
}

export default MainPage;

