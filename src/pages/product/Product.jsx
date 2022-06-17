import { Link, useLocation} from "react-router-dom";
import "./product.css";
import Chart from "../../component/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Product() {

    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const [formData, setFormData] = useState({
        name: "",
        desc: "",
        price: "",
        inStock: true
    })

    const handleProductForm = () =>{
        console.log("formData", formData);
    }
    const product = useSelector((state) => state.product.products
    .find((product) => product._id === productId))
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
       
      </div>
      <div className="productTop">
          
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">price:</span>
                      <span className="productInfoValue">{product.price}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">size:</span>
                      <span className="productInfoValue">
                        <select>
                            {product.size.map((size, index) =>{
                                return (
                                    <option key={index}>{size}</option>
                                )
                            })}
                        </select>
                      </span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">color:</span>
                      <span className="productInfoValue">
                        <select>
                            {product.color.map((color, index) =>{
                                return (
                                    <option key={index}>{color}</option>
                                )
                            })}
                        </select>
                      </span>
                  </div>
                
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm" onSubmit={handleProductForm()}>
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.title} onChange={(e) => setFormData(formData.name, e.target.value)}/>
                  <label>Product Description</label>
                  <input type="text" placeholder={product.desc}  onChange={(e) => setFormData(formData.desc, e.target.value)}/>
                  <label>Product Price</label>
                  <input type="text" placeholder={product.price}  onChange={(e) => setFormData(formData.price, e.target.value)}/>
                  <label>In Stock</label>
                  <select name="inStock" id="idStock"  onChange={(e) => setFormData(formData.inStock, e.target.value)}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                 
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}