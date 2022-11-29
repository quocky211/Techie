import "./MainPage.css";
import data from '../data';
import ContainerItem from "../ContainerItem";
import Slideshow from "../Slideshow/Slideshow";
import { useState, useEffect } from "react";
import axios from "axios";
function MainPage() {
    const [list, setlist] = useState([]);  
    
    useEffect(() => {
            axios.get('http://demoapiiii.somee.com/api/ServiceController/GetAllSP')
            .then(res => setlist(res.data))                 
    },[]);
    return (
        <div>
            <Slideshow/>
            <div className="newProducts">
                <h3 className="newProducts_name name">Sản phẩm mới</h3>
                <div className="newProducts_product product">
                {list.map((item,index)=> item.loai==="keyboard"
            &&(ContainerItem(item.hinh, item.name, item.price)))}
                </div>
            </div>
            <div className="newProducts_product"></div>

            <div className="bestSeller">
                <h3 className="bestSeller_name name">Bán chạy</h3>
                <div className="bestSeller_product product">
                    {list.map((item,index)=> item.loai==="mouse"
                    &&(ContainerItem(item.hinh, item.name, item.price)))} 
                </div>
            </div>

            <div className="onSale">
                <h3 className="onSale_name name">Giảm giá</h3>
                <div className="onSale_product product">
                    {list.map((item,index)=> item.loai==="sacDp"
                    &&(ContainerItem(item.hinh, item.name, item.price)))}  
                </div>
            </div>
        </div>
    )
}

export default MainPage;

