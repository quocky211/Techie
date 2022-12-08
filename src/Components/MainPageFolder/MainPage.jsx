import "./MainPage.css";
import data from '../data';
import ContainerItem from "../ContainerItem";
import Slideshow from "../Slideshow/Slideshow";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {connect} from "react-redux"
import {Off_Noti} from '../../actions';
const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function MainPage({noti,Off_Noti}) {
    
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    Off_Noti()
  };
    const [list, setlist] = useState([]);  
    
    useEffect(() => {
            axios.get('http://demoapiiii.somee.com/api/ServiceController/GetAllSP')
            .then(res => setlist(res.data))     
        Off_Noti()
    },[]);

    let settings = {
        arrows:true,
        infinite: true,
        speed:1000,
        slidesToShow:4,
        slidesToScroll:1,
    };
    return (
        <div className="mainPage">
            <Slideshow/>
            <div className="newProducts">
                <div className="newProducts_product product">
                    <button></button>
                <h3 className="newProducts_name title-name" >Sản phẩm mới</h3>

                <Snackbar open={noti} autoHideDuration={1500} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Thêm vào giỏ hàng thành công!
                  </Alert>
                </Snackbar>
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
const mapStateToProps = state =>{
    return{
        noti:state._todoProduct.noti
    }
}
export default connect(mapStateToProps,{Off_Noti})(MainPage)


