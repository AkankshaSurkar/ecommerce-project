
import { Container } from "react-bootstrap";
import "../App.css";
function About(props) {
  return (
    <div>
        {/* const location = useLocation(); */}

      <h1 className="header">The Generics</h1>
      <Container>
        <row>
          <col xs={4}>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </col>
        </row>
      </Container>

      <h1 className="headerend">The Generics</h1>
      <ul>
        <li>
          <a href="https://www.youtube.com">
          <img src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt=""></img>
          </a>
        </li>
        <li>
          <a href="https://spotify.com">
          <img src="./img/Spotify Logo.png" alt=""> </img>
                </a>
        </li>
        <li>
          <a href="https://facebook.com">
          <img src="./img/Facebook Logo.png" alt=""></img>   </a>
        </li>
      </ul>
    </div>
  );
}
export default About;
