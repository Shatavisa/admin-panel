import { DeleteOutline } from "@mui/icons-material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Datatable from "../../component/datatable/Datatable"
import Navbar from "../../component/navbar/Navbar"
import Sidebar from "../../component/sidebar/Sidebar"
import { userRequest } from "../../redux/requestMethods"
import "./list.scss"


const List = () => {
  const [users, setUsers] = useState([])


  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await userRequest.get("users/")
        ///console.log(response);
        setUsers(response.data)
      } catch (err) {
        console.log(err);
      }


    }
    getUsers()

  }, [])

  const columns = [
    { field: "_id", headerName: "ID", width: 220 } ,
    {
      field: "username",
      headerName: "Username",
      width: 200,
     
    },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "mobile",
      headerName: "Phone",
      width: 160,
    },
   
  ];

  // console.log("users", users);
  return (
    <div className="list">
    <Sidebar/>
      
      <div className="listContainer">

       <Navbar/>
       
       <DataGrid
        className="datagrid"
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={9}
        checkboxSelection
      />
       
      </div>
    </div>
  )
}

export default List