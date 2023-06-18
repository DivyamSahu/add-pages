import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./ATV.css";
function ATV() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand brand" href="#">
            <h1>Apex Adventure</h1>
          </a>
          <button
            className="navbar-toggler bg-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "burlywood" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "burlywood" }}>
                  Adventure Activities
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "burlywood" }}
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Restaurant
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shoping
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-warning me-2" type="submit">
                Sign In
              </button>
              <button className="btn btn-warning" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="row justify-content-center w-100 m-0">
        <div className="col-sm-12 col-md-6 alert alert-warning p-3 m-0">
          <h3>ATV</h3>
          <p>
            Embark on an unforgettable experience like no other and that too an
            exhilarating one with the mighty 700cc Yamaha Raptor ATV Ride on
            India’s first permanent dirt track. Get ready for the ride of your
            life! This adrenaline-charged experience on the 250 metre dirt track
            brings maximum fun to the youth. Thrill seekers, wait no longer tame
            the beast and unleash the monster deep within you.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 img-div">
          <img src="assests/images/ATV.jpg" className="img-fluid" alt="..." />
        </div>
      </div>
      <div
        className="row justify-content-center w-100 m-0"
        style={{ padding: "12px" }}
      >
        <div className="col-sm-12 col-md-12 alert alert-warning p-3 m-0 pass-div">
          <h5 style={{ flex: "1" }}>ACTIVITY AVAILABLE IN:</h5>
          <h6>Jumbo pass</h6>
          <h6>Kids Friendly</h6>
        </div>
      </div>
      <div
        className="row justify-content-center w-100 m-0"
        style={{ padding: "12px" }}
      >
        <div className="col-sm-12 col-md-12 alert alert-warning p-3 m-0 bg-dark">
          <h4>Safety Measures</h4>
          <ol style={{ color: "white" }}>
            <li>
              Helmet, Elbow & Knee guard is provided and is to be worn at all
              times.
            </li>
            <li>
              Do not operate the ATV at excessive speeds. Ride at a speed that
              is proper for the terrain visibility conditions and your
              experience.
            </li>
            <li>Children are allowed only with the 'Marshals'.</li>
            <li>
              If you are pregnant, have a heart condition, neck or back
              problems, epilepsy, a neurological disorder you should not
              participate in the above activity.
            </li>
            <li>
              You must not be under the influence of Alcohol, Drugs or any other
              substance that may affect your senses.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default ATV;
