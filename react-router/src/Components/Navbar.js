import React from 'react'
import "./Navbar.css"
function Navbar1() {
  return (
    <div>
  <div className="container">
  <div className="row">
    <div className="col-sm-3">
      <div className="sidebar-nav">
        <div className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".sidebar-navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <span className="visible-xs navbar-brand">Sidebar menu</span>
          </div>
          <div className="navbar-collapse collapse sidebar-navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Menu Item 1</a>
              </li>
              <li>
                <a href="#">Menu Item 2</a>
              </li>
              <li>
                <a href="#">Menu Item 3</a>
              </li>
              <li>
                <a href="#">Menu Item 4</a>
              </li>
              <li>
                <a href="#">
                  Reviews <span className="badge">1,118</span>
                </a>
              </li>
            </ul>
          </div>
          {/*/.nav-collapse */}
        </div>
      </div>
    </div>
    <div className="col-sm-9">Main content goes here</div>
  </div>
</div>


    </div>
  )
}

export default Navbar1