import React from 'react'
import Product1 from './Product';
const Home = () => {
  return (
  <>
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img 
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" 
        className="d-block w-100" 
        style={{ objectFit: 'cover', height: '80vh' }} 
        alt="..."
      />
    </div>
    <div className="carousel-item">
      <img 
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" 
        className="d-block w-100" 
        style={{ objectFit: 'cover', height: '80vh' }} 
        alt="..."
      />
    </div>
    <div className="carousel-item">
      <img 
        src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        className="d-block w-100" 
        style={{ objectFit: 'cover', height: '80vh' }} 
        alt="..."
      />
    </div>
  </div>

  <button 
    className="carousel-control-prev" 
    type="button" 
    data-bs-target="#carouselExample" 
    data-bs-slide="prev" 
    style={{ border: "1px solid black", backgroundColor: "grey", height: "50px", margin: "auto 1rem", width: "50px" }}
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button 
    className="carousel-control-next" 
    type="button" 
    data-bs-target="#carouselExample" 
    data-bs-slide="next" 
    style={{ border: "1px solid black", backgroundColor: "grey", height: "50px", margin: "auto 1rem", width: "50px" }}
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<Product1/>
  </>
  )
}

export default Home
