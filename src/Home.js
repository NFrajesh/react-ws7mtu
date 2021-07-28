import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import './style.css';

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <div className="heading">
          <div className="jumbotron text-centre" id="heading">
            <h1 className="myname">Rajesh Kumar</h1>
            <p className="myoccupation">Software Developer</p>
            <div>
              <ul className="nav nav-pills nav-justified" id="navigation">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/youtube">
                    Youtube
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/project">
                    Project
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="rounder-circle">
                  <img
                    src="./images/ResumeProfilePic.jpg"
                    className="rounded-circle mx-auto d-block"
                    alt="Profile Pic "
                    width="130px"
                    height="150px"
                  />
                </div>
                <br />
              </div>
              <div className="col-sm-8">
                <h2 className="myskills">Career Objective</h2>
                <br />
                <p className="skills">
                  To give my best in my professional pursuit for overall benefit
                  and growth of the company that I serve by facing the
                  challenges
                </p>
              </div>
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="myskills">Technical Skills</h1>

                    <br />
                    <ul className="skills">
                      <li>
                        Frontend languages - HTMl , CSS , Javascript ,ReactJs
                      </li>
                      <li>Backend languages - Python , Django</li>
                      <li>Database - Mysql , Sqlite</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h1 className="myskills">Certifications</h1>

                    <br />
                    <ul className="skills">
                      <li>Elysium certified python programmer</li>
                      <li>Elysium certified django programmer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
