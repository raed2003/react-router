import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div>
       <nav className="dropdownmenu">
  <ul>
    <li>
      <a href="http://www.jochaho.com/wordpress/">Home</a>
    </li>
    <li>
      <a href="http://www.jochaho.com/wordpress/about-pritesh-badge/">
        About Me
      </a>
    </li>
    <li>
      <a href="#">Articles on HTML5 &amp; CSS3</a>
      <ul id="submenu">
        <li>
          <a href="http://www.jochaho.com/wordpress/difference-between-svg-vs-canvas/">
            Difference between SVG vs. Canvas
          </a>
        </li>
        <li>
          <a href="http://www.jochaho.com/wordpress/new-features-in-html5/">
            New features in HTML5
          </a>
        </li>
        <li>
          <a href="http://www.jochaho.com/wordpress/creating-links-to-sections-within-a-webpage/">
            Creating links to sections within a webpage
          </a>
        </li>
      </ul>
    </li>
    <li>
      <a href="http://www.jochaho.com/wordpress/category/news/">News</a>
    </li>
    <li>
      <a href="http://www.jochaho.com/wordpress/about-pritesh-badge/">
        Contact Us
      </a>
    </li>
  </ul>
</nav>
 
    </div>
  )
}

export default Home