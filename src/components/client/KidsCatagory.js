import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const KidsCatagory = () => {


  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);


  const fetchImages = async () => {
    try {
      const response = await fetch('https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/client/imageshow', {

        headers: {
          authorization: JSON.parse(localStorage.getItem("token"))
        }
      });
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
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



        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 order-2">

                <div className="row mb-5">

                  {images.length > 0 &&
                    images.filter(man => man.catagory == "kids").map((x) => (

                      <>

                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                          <div className="block-4 text-center border">
                            <figure className="block-4-image">
                              <Link to={`/products/${x._id}`}><img src={`https://newphoolbackend-e5f66bec9c2c.herokuapp.com/uploads/${x.filename}`} alt="Image placeholder" className="img-fluid" /></Link>
                            </figure>
                            <div className="block-4-text p-4">


                              <p className="mb-0"> <Link to={`/products/${x._id}`}>{x.title}</Link></p>

                              <p className="text-primary font-weight-bold">{x.price}</p>
                            </div>
                          </div>
                        </div>

                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default KidsCatagory;