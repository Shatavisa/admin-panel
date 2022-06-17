import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg

const List = () => {
  
    const rows = [
        {
          id: 1143155,
          product: "ASUS VivoBook 15 Thin and Light Laptop ",
          img: "https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70",
          customer: "M Sumeet",
          date: "3 March 2022",
          amount: 40000,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Casual Sleeveless Solid Women Black Top",
          img: "https://rukminim1.flixcart.com/image/800/960/kyhlfgw0/top/9/j/f/-original-imagapzwstwwctz8.jpeg?q=50",
          customer: "Dolly Sharma",
          date: "6 April 2022",
          amount: 1200,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Realme narzo 50 5G ",
          img: "https://m.media-amazon.com/images/I/91p5L+GitZL._SL1500_.jpg",
          customer: "Sunil Sharma",
          date: "17 May 2022",
          amount: 12000,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Seagate 1TB External HDD",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Gurkreet Singh",
          date: "1 June 2022",
          amount: 3000,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "Titan Watch",
          img: "https://m.media-amazon.com/images/I/61mGoTX-3UL._SL1500_.jpg",
          customer: "Ketan Singh",
          date: "28 April 2022",
          amount: 6000,
          method: "Online",
          status: "Pending",
        },
      ];



  return ( <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className="tableCell">Tracking ID</TableCell>
        <TableCell className="tableCell">Product</TableCell>
        <TableCell className="tableCell">Customer</TableCell>
        <TableCell className="tableCell">Date</TableCell>
        <TableCell className="tableCell">Amount</TableCell>
        <TableCell className="tableCell">Payment Method</TableCell>
        <TableCell className="tableCell">Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell className="tableCell">{row.id}</TableCell>
          <TableCell className="tableCell">
            <div className="cellWrapper">
              <img src={row.img} alt="" className="image" />
              {row.product}
            </div>
          </TableCell>
          <TableCell className="tableCell">{row.customer}</TableCell>
          <TableCell className="tableCell">{row.date}</TableCell>
          <TableCell className="tableCell">{row.amount}</TableCell>
          <TableCell className="tableCell">{row.method}</TableCell>
          <TableCell className="tableCell">
            <span className={`status ${row.status}`}>{row.status}</span>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>)
}

export default List
