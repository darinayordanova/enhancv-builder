import './Header.scss'; 
function Header() {
    return (
        <header>
          <div className='header-group left'>
            <a href='#'><img src='./Logo_horizontal.svg'/></a>
            <div className='menu-links'>
              <a href='#'>Dashboard</a>
              <a href='#'>Help</a>
            </div>
          </div>
          <div className='header-group right'>
            <a href='#'><img src='./Bell.svg'/></a>
            <a href='#'><img src='./user.svg'/></a>
            <a href='#'><img src='./Dark.svg'/></a>
          </div>
        </header>
    );
  }
  
  export default Header;