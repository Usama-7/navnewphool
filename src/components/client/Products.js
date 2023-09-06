import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const Products = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);


  useEffect(() => {
    fetchImages();
  }, []);


  const fetchImages = async () => {
    try {
      const response = await fetch('https://phoolbackendsep-usama-7.vercel.app/api/v1/client/imageshow', {

        headers: {
          authorization: JSON.parse(localStorage.getItem("token"))
        }
      });
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  // Function to handle search input change
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter the product list based on the search term
    const filtered = images.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (
    <>

      <div className="site-wrap">

        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Products</strong></div>
            </div>
          </div>
        </div>


        <ul className="nav justify-content-center mt-4">
                <li className="nav-item">
                  <Link className="btn nav-link" aria-current="page" to="/products">All</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn nav-link" aria-current="page" to="/mancatagory">Man</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn nav-link" to="/womancatagory">Woman</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn nav-link" to="/kidscatagory">Kids</Link>
                </li>
               
              </ul>


        <div className="site-section p-4">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 order-2">

              


                <div className="row">
                  
                </div>

                <form action className="site-block-top-search mb-5 mt-3">
                  <span className="icon icon-search2" />
                  <input value={searchTerm} onChange={handleSearch} type="text" className="form-control border-0" placeholder="Search" />
                </form>

                {

                  loading ? <div className="mb-5" style={{ marginLeft: "50%" }}>
                    <RingLoader color="#7971ea" />
                  </div>

                    :

                    <>
                      <div className="row mb-5">

                        {

                          filteredProducts.length > 0
                            ? filteredProducts.map((x) =>

                              <>
                                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                  <div className="block-4 text-center border">
                                    <figure className="block-4-image">
                                      <Link to={`/products/${x._id}`}><img src={`https://phoolbackendsep-usama-7.vercel.app/uploads/${x.filename}`} alt="Image placeholder" className="img-fluid" /></Link>
                                    </figure>
                                    <div className="block-4-text p-4">
                                      <p className="mb-0"> <Link to={`/products/${x._id}`}>{x.title}</Link></p>
                                      <p className="text-primary font-weight-bold">${x.price}</p>
                                    </div>
                                  </div>
                                </div>

                              </>
                            )

                            :
                            images.length > 0 &&
                            images.map((x) => (

                              <>

                                <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                  <div className="block-4 text-center border">
                                    <figure className="block-4-image">
                                      <Link to={`/products/${x._id}`}><img src={`https://phoolbackendsep-usama-7.vercel.app//uploads/${x.filename}`} alt="Image placeholder" className="img-fluid" /></Link>
                                    </figure>
                                    <div className="block-4-text p-4">


                                      <p className="mb-0"> <Link to={`/products/${x._id}`}>{x.title}</Link></p>

                                      <p className="text-primary font-weight-bold">Rs.{x.price}</p>
                                    </div>
                                  </div>
                                </div>

                              </>
                            ))}


                      </div>
                    </>
                }

              </div>



            </div>

          </div>
        </div>

      </div>

    </>
  );
}

export default Products;