import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Cattest = () => {

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

                  {images.length > 0 &&
                    images.filter(man => man.catagory == "woman").map((x) => (

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
</>


  )}

export default Cattest;