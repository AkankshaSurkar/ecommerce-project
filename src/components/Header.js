// import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            {/* <li>
              <Navbar bg="Light" expand="sm" variant="dark">
                <Container>
                  <Navbar.Brand href="/">HOME</Navbar.Brand>
                </Container>
              </Navbar>
            </li>

            <li>
              <Navbar bg="Light" expand="sm" variant="dark">
                <Container>
                  <Navbar.Brand href="/">ABOUT</Navbar.Brand>
                </Container>
              </Navbar>
            </li>
            <li>
              <Navbar bg="Light" expand="sm" variant="dark">
                <Container>
                  <Navbar.Brand href="/">STORE</Navbar.Brand>
                </Container>
              </Navbar>
            </li> */}
            <li>
              <NavLink to="/home"
                exact
                activeClassName="active_class"
                
                // className={({ isActive }) =>
                //   isActive ? classes.active : undefined
                // }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
              activeClassName="active_class"
                
                // className={({ isActive }) =>
                //   isActive ? classes.active : undefined
                // }
              >
                About
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/"
                activeClassName="active_class"
                
                // className={({ isActive }) =>
                //   isActive ? classes.active : undefined
                // }
              >
                Store
              </NavLink>
            </li>
          </ul>
        </nav>
        <br />
        <br />

        <div className={classes.carts} onClick={() => props.handleShow(true)}>
          {" "}
          Cart
          <sup> {props.count} </sup>
        </div>
      </header>

      <h1 className="header">The Generics</h1>
      <div>
        <h1 className="headers">MUSIC</h1>
      </div>
    </div>
  );
}

export default Header;
