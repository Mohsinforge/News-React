export default function Header() {
  return (
    <header>
      <div className="logo">
        <div style={{ margin: 0 }}>A$K News</div>
        <input type="text" placeholder="Search news..." />
      </div>
      <nav className="mainNav">
        <ul>
          <li className='navItem'><a href="https://www.bbc.com/">Home</a></li>
          <li className='navItem'><a href="https://www.bbc.com/world">World</a></li>
          <li className='navItem'><a href="https://www.bbc.com/politics">Politics</a></li>
          <li className='navItem'><a href="https://www.bbc.com/business">Business</a></li>
          <li className='navItem'><a href="https://www.bbc.com/technology">Technology</a></li>
          <li className='navItem'><a href="https://www.bbc.com/sports">Sports</a></li>
        </ul>
      </nav>
    </header>
  );
}