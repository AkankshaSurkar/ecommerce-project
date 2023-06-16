import { Link } from "react-router-dom";
import "../App.css";

function Header(props) {
  console.log(props);
  return (
    <div>
      <div className="flex shopping-card">
        <Link to="/home">
          <div onClick={() => props.handleShow(true)}>HOME</div>
        </Link>
        <Link to="/store">
          <div onClick={() => props.handleShow(true)}>STORE</div>
        </Link>
        <Link to="/about">
          <div onClick={() => props.handleShow(true)}>ABOUT</div>
        </Link>
        <Link to="/contact">
          <div onClick={() => props.handleShow(true)}>CONTACT US</div>
        </Link>
        <Link to="/product">
          <div onClick={() => props.handleShow(true)}>Product</div>
        </Link>




        <div onClick={() => props.handleShow(true)}>
          {" "}
          Cart
          <sup> {props.count} </sup>
        </div>
      </div>
    </div>
  );
}

export default Header;
