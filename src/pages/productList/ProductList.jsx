import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteProducts, getProducts } from "../../redux/apiCalls";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";


const ProductList = () => {
  //const [data, setData] = useState(productRows);
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  // console.log("data", data);
  // console.log(productRows);
  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])
  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
    deleteProducts(id, dispatch)



  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="list">
    <Sidebar/>
      
      <div className="listContainer">

       <Navbar/>
       {/* <Datatable/> */}
       <DataGrid
        className="datagrid"
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={9}
        checkboxSelection
      />
       
      </div>
    </div>
    // <div className="productList">
     
    //   <DataGrid
    //     className="datagrid"
    //     rows={products}
    //     disableSelectionOnClick
    //     columns={columns}
    //     getRowId={(row) => row._id}
    //     pageSize={9}
    //     checkboxSelection
    //   />
    // </div>
  );
}

export default ProductList;