import '../App.css';

function Header(props) {
    return (
      <div>
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >HOME</div>
            <div onClick={() => props.handleShow(false)} >STORE</div>
            <div onClick={() => props.handleShow(false)} >ABOUT</div>

            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>

        </div>
        <div>
  <h1 className='header'>The Generics</h1>
        </div>
        </div>


    );
}

export default Header;
