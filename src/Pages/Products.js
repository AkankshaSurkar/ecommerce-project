import { Link } from "react-router-dom";
const Product = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/product/p1'>A Carpet</Link>
        </li>

        <li>
          <Link to='/product/p2'>A Book</Link>
        </li>
        <li>
          <Link to='/product/p3'>A papers</Link>
        </li>
      </ul>
    </section>
  );
};
export default Product;
