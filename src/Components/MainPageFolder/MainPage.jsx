import "./MainPage.css";
import data from '../data';
import ContainerItem from "../ContainerItem";
import Slideshow from "../Slideshow/Slideshow";
function MainPage() {
    return (
        <div>
            <Slideshow/>
            <div className="newProducts">
                <h3 className="newProducts_name name">Sản phẩm mới</h3>
                <div className="newProducts_product product">
                    {data[0].map(item => ContainerItem(item.image, item.name, item.price))}
                </div>
            </div>
            <div className="newProducts_product"></div>

            <div className="bestSeller">
                <h3 className="bestSeller_name name">Bán chạy</h3>
                <div className="bestSeller_product product">
                    {data[1].map(item => ContainerItem(item.image, item.name, item.price))}
                </div>
            </div>

            <div className="onSale">
                <h3 className="onSale_name name">Giảm giá</h3>
                <div className="onSale_product product">
                    {data[2].map(item => ContainerItem(item.image, item.name, item.price))}
                </div>
            </div>
        </div>
    )
}

export default MainPage;

