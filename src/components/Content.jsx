import React from 'react'
import { useState } from 'react';

function Content() {

  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

  const handleRemoveFromCart = () => {
    setCartItems(cartItems - 1);
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {/* <!-- Product details--> */}
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="../src/assets/fancy.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Fancy Product</h5>
                  $40.00 - $80.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                    {cartItems > 0 ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={handleRemoveFromCart}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
        {/* <!-- Product details--> */}
          <div className="col mb-5">
            <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem' , right: '0.5rem'}}>Sale</div>
              <img className="card-img-top" src="../src/assets/spl.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Special Item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  <span className="text-muted text-decoration-line-through">$20.00</span>
                  $18.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                    {cartItems > 0 ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={handleRemoveFromCart}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
          {/* <!-- Product details--> */}
          <div className="col mb-5">
            <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem' , right: '0.5rem'}}>Sale</div>
              <img className="card-img-top" src="../src/assets/sale.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Sale Item</h5>
                  <span className="text-muted text-decoration-line-through">$50.00</span>
                  $25.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                    {cartItems > 0 ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={handleRemoveFromCart}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
          {/* <!-- Product details--> */}
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="../src/assets/pop.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Popular Item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  $40.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                    {cartItems > 0 ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={handleRemoveFromCart}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
          {/* <!-- Product details--> */}
          <div className="col mb-5">
            <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem' , right: '0.5rem'}}>Sale</div>
              <img className="card-img-top" src="../src/assets/sale.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Sale Item</h5>
                  <span className="text-muted text-decoration-line-through">$50.00</span>
                  $25.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                    {cartItems > 0 ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={handleRemoveFromCart}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
          {/* <!-- Product details--> */}
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="../src/assets/fancy.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Fancy Product</h5>
                  $120.00 - $280.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                    {cartItems > 0 ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={handleRemoveFromCart}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
          {/* <!-- Product details--> */}
          <div className="col mb-5">
            <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem' , right: '0.5rem'}}>Sale</div>
              <img className="card-img-top" src="../src/assets/spl.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Special Item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  <span className="text-muted text-decoration-line-through">$20.00</span>
                  $18.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                    {cartItems > 0 ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={handleRemoveFromCart}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
          {/* <!-- Product details--> */}
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="../src/assets/pop.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Popular Item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  $40.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                    {cartItems > 0 ? (
                      <button className="btn btn-outline-danger mt-auto" onClick={handleRemoveFromCart}>
                        Remove from cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                    )}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content