import React from 'react'
import { Link } from 'react-router-dom';
import Catagory from './Catagory';

const HomePage = () => {
  return (
    <>

      <div>


      <ul className="nav justify-content-center mt-4 py-2 mb-3" style={{ backgroundColor: "#f8f8f6", textDecoration: "none" }}>
          <li className="nav-item">
            <Link className="btn nav-link" aria-current="page" to="/products"><span style={{color:"#5690AF"}}>All Products</span></Link>
          </li>
          <li className="nav-item">
            <Link className="btn nav-link" aria-current="page" to="/mancatagory"><span style={{color:"#5690AF"}}>Man</span></Link>
          </li>
          <li className="nav-item">
            <Link className="btn nav-link" to="/womancatagory"><span style={{color:"#5690AF"}}>Woman</span></Link>
          </li>
          <li className="nav-item">
            <Link className="btn nav-link" to="/kidscatagory"><span style={{color:"#5690AF"}}>Kids</span></Link>
          </li>

        </ul>
        

        <div id='hero' className="site-blocks-cover d-none d-lg-block" style={{ backgroundImage: 'url(images/hero4.jpg)'  }} data-aos="fade">
          <div className="container">
            <div className="row align-items-start align-items-md-center justify-content-end">
              <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                <h1 className="mb-2">Finding Your Perfect Cloths here</h1>
                <div className="intro-text text-center text-md-left">
                  <p className="mb-4">Unparalleled comfort and support, timeless style, durable craftsmanship—a perfect fusion of function and fashion for every occasion. </p>
                  <p>
                    <Link to="/products" className="btn btn-sm btn-success" style={{backgroundColor:"#5690AF" , border:"1px solid #5690AF"}}>Shop Now</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id='hero'  className="site-blocks-cover1 d-block d-lg-none" style={{ backgroundImage: 'url(images/hero4mob.jpg)'  }} data-aos="fade">
          <div className="container">
            <div className="row align-items-start align-items-md-center justify-content-end">
              <div className="col-lg-5 text-center text-md-left pt-5 pt-md-0">
                <h1 className="mb-2">Finding Your Perfect Cloths here.</h1>
                <div className="intro-text text-center text-md-left">
                  <p className="mb-4">Unparalleled comfort and support, timeless style, durable craftsmanship—a perfect fusion of function and fashion for every occasion. </p>
                  <p>
                    <Link to="/products" className="btn btn-sm btn-success" style={{backgroundColor:"#5690AF" , border:"1px solid #5690AF"}}>Shop Now</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="site-section site-blocks-2">
          <div className="container-fluid">
            <div className="row justify-content-center  mb-5">
              <div className="col-md-7 site-section-heading text-center pt-5">
                <h2>Collections</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-12 col-md-6 col-lg-6 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
                <Link className="block-2-item" to="womancatagory">
                  <figure className="image" >
                    <img src="images/stiched.jpg" alt className="img-fluid"  />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3 className="collectiontype">Stiched</h3>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-12 col-md-6 col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
                <Link className="block-2-item" to="kidscatagory">
                  <figure className="image" >
                    <img src="images/unstiched.jpg" alt className="img-fluid"  />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3 className='collectiontype'>Un-stiched</h3>
                  </div>
                </Link>
              </div>
              
            </div>
          </div>
        </div>





        <div className="site-section site-blocks-2">
          <div className="container-fluid">
            
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 mb-12 mb-lg-0"  data-aos="fade" data-aos-delay>
                <Link className="block-2-item" to="womancatagory">
                  <figure className="image figheight" id="" >
                    <img src="images/phulkarian_pic.jpg" alt className="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3 className='collectiontype'>Phulkarian</h3>
                  </div>
                </Link>
              </div>
              
              
            </div>
          </div>
        </div>




        <div className="site-section site-blocks-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-6 col-md-4 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
                <Link className="block-2-item" to="womancatagory">
                  <figure className="image">
                    <img src="images/women.jpg" alt className="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3 className='collectiontype'>Women</h3>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-6 col-md-4 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
                <Link className="block-2-item" to="kidscatagory">
                  <figure className="image">
                    <img src="images/children.jpg" alt className="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3 className='collectiontype'>Kids</h3>
                  </div>
                </Link>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={200}>
                <Link className="block-2-item" to="mancatagory">
                  <figure className="image">
                    <img src="images/men.jpg" alt className="img-fluid" />
                  </figure>
                  <div className="text">
                    <span className="text-uppercase">Collections</span>
                    <h3 className='collectiontype'>Men</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>




        <div className="site-section site-section-sm site-blocks-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-truck" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Shipping</h2>
                  <p>Discover your dream shoes with the added bonus of free shipping, bringing convenience and savings to your doorstep.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-refresh2" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Free Returns</h2>
                  <p>Enjoy the freedom of hassle-free returns, ensuring complete satisfaction with your perfect shoes, backed by our customer-friendly policy..</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon mr-4 align-self-start">
                  <span className="icon-help" />
                </div>
                <div className="text">
                  <h2 className="text-uppercase">Customer Support</h2>
                  <p>Our dedicated customer support team is here to assist you, providing exceptional service and resolving any queries or concerns promptly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="site-section block-8">
          <div className="container">
            <div className="row justify-content-center  mb-5">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Big Sale!</h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-7 mb-5">
                <a href="#"><img src="images/blog_1.jpg" alt="Image placeholder" className="img-fluid rounded" /></a>
              </div>
              <div className="col-md-12 col-lg-5 text-center pl-md-5">
                <h2><a href="#">50% less in all items</a></h2>
                <p className="post-meta mb-4">By <a href="#">M Usama Razzaq</a> <span className="block-8-sep">•</span> MAy 31, 2023</p>
                <p>Don't miss out on our incredible big sale with a whopping 50% off, making it the perfect time to snag your dream shoes!</p>
                <p><Link to="/products" className="btn btn-primary btn-sm">Shop Now</Link></p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default HomePage;