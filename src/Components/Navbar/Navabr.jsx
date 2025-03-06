
import { React } from 'react';
import NavbarData from '../../Data/NavbaData';


const Navabr = () => {
	

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-center">

      { NavbarData.map(data=>
          <li className="nav-item" key={data.id}>
          <a className="nav-link" aria-current="page" href="/">{data.item}</a>
        </li>
        )
      }
        {/* <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">SAVE MORE ON APP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">CUSTOMER CARE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">SELL ON BARAZ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">TRACK MY ORDER</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">SIGNUP / LOGIN</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">ভাষা</a>
        </li> */}
      
       
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navabr;