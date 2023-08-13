import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'


const Navbar = () => {
  const [isOffcanvasMenuOpen, setOffcanvasMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const getdata = useSelector((state) => state.cartreducer.carts);

  const logout = () => {

    console.log('auth id_______++__', JSON.parse(auth).name)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't Logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout'
    }).then( async (result)  => {
      if (result.isConfirmed) {

        localStorage.removeItem('token');
        localStorage.removeItem('user');
         navigate("/login")
      }
    })


    // localStorage.clear()

  };

  // const toggleOffcanvasMenu = () => {
  //   setOffcanvasMenuOpen(!isOffcanvasMenuOpen);
  // };


  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>

<marquee  bgcolor = "red" direction = "left" color = "white" style={{color:"white", fontWeight: "bolder" }}>
        Free Delievery on All items
    </marquee>

<div className='container-fluid'>
  <div className='row py-3 '>


  


    <div className='col-4  pt-1' style={{ fontSize: "18px" }}>
      <img src='images/phone-icon.png' width={40} height={40}></img>
      <span className='d-none d-lg-inline' style={{ paddingLeft: "10px" }}>03098908989</span>
    </div>
    

    <div className='col-4 ' style={{ fontSize: "30px" }}>
      <span className='px-4' style={{ border: "2px solid " }}>PhoolKarian</span>
    </div>
          
    <div className='col-4 d-none d-lg-block pt-1' style={{ fontSize: "18px" }}>
      <img src='images/email-icon.png' width={40} height={40}></img>
      <span  style={{ paddingLeft: "10px" }}>musamarazzaq7@gmail.com </span>
    </div>
  </div>
</div>



      <nav className={`navbar navbar-expand-lg navbar-dark ${isNavOpen ? 'navbar-open' : ''}`} style={{ backgroundColor: "#5690af" }}>
        <div className="container-fluid">
        <button
            className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleNav}
          >
            <span
              className={`navbar-toggler-icon ${
                isNavOpen ? 'd-none' : ''
              }`}
            />
            <span
              className={`close-icon ${isNavOpen ? '' : 'd-none'}`}
            >
              &times;
            </span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ fontWeight: "bolder" , fontSize: "18px", display: "flex", justifyContent: "center" }}>
        <li className="nav-item pr-2">
          <Link className="nav-link text-light" onClick={closeNav} to="/">Home</Link>
        </li> 
        <li className="nav-item pr-2" >
          <Link className="nav-link text-light" to="/products" onClick={closeNav}>Products</Link>
        </li>
        <li className="nav-item pr-2">
          <Link className="nav-link text-light" to="/contact" onClick={closeNav}>Contact</Link>
        </li>
        {auth && JSON.parse(auth).role === 1 && (
          <>
            <li className="nav-item pr-2">
              <Link className="nav-link text-light" to="/adminAddProducts" onClick={closeNav}>AddProduct</Link>
            </li>
            <li className="nav-item pr-2">
              <Link className="nav-link text-light" to="/adminProductsList" onClick={closeNav}>Product List</Link>
            </li>
            <li className="nav-item pr-2">
              <Link className="nav-link text-light" to="/userlist" onClick={closeNav}>Users List</Link>
            </li>
            <li className="nav-item pr-2">
              <Link className="nav-link text-light" to="/messages" onClick={closeNav}>Messages</Link>
            </li>
            <li className="nav-item pr-2">
              <Link className="nav-link text-light" to="/purchaserequest" onClick={closeNav}>Purchase Request</Link>
            </li>
          </>
        )}
     
      
        {auth ? (
          <li className="nav-item pl-5">
            <Link className="nav-link text-light"  onClick={function(event){ logout(); closeNav()}} >
              <span className="icon icon-person" />logout <span style={{border:"2px solid", padding:" 0px 10px"}}> {JSON.parse(auth).name} </span>
            </Link>
          </li>
        ) : (
          <li className="nav-item pr-2">
            <Link className="nav-link text-light" to="/login" onClick={closeNav}>
              <span className="icon icon-person" />Login
            </Link>
          </li>
        )}
        <li className="nav-item pr-2">
          <Link to="/cart" className="site-cart nav-link text-light" onClick={closeNav}>
            <span className="icon icon-shopping_cart" />
            <span className="count">{getdata.length}</span>
          </Link>
        </li>
        </ul>
          </div>
        </div>
      </nav>






    </>
  );
};

export default Navbar;
