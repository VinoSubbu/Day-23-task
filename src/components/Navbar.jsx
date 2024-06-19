import React, { useState } from 'react';

function Navbar() {
    const [cartItems, setCartItems] = useState({});

    const handleToggleCart = (productId) => {
        setCartItems(prevCartItems => {
            const updatedCartItems = { ...prevCartItems };
            updatedCartItems[productId] = !updatedCartItems[productId];
            return updatedCartItems;
        });
    };

    const count = Object.values(cartItems).filter(isAdded => isAdded).length;

    return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              Shopping Cart
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        All Products
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div>
                <form className="d-flex">
                  <button className="btn btn-outline-dark" type="button">
                    <i className="bi-cart-fill me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                      {count}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                With this shop homepage template
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {Array.from({ length: 5 }, (_, index) => {
                const productId = `product${index + 1}`;
                const isAdded = cartItems[productId] || false;

                return (
                  <div className="col mb-5" key={productId}>
                    <div className="card h-100">
                      <img
                        className="card-img-top"
                        src="../src/assets/fancy.jpg"
                        alt="..."
                      />
                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">Fancy Product</h5>
                          $40.00 - $80.00
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          {isAdded ? (
                            <button
                              className="btn btn-outline-danger mt-auto"
                              onClick={() => handleToggleCart(productId)}
                            >
                              Remove from cart
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-dark mt-auto"
                              onClick={() => handleToggleCart(productId)}
                            >
                              Add to cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Additional product cards */}
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="../src/assets/spl.jpg"
                    alt="..."
                  />
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
                      <span className="text-muted text-decoration-line-through">
                        $20.00
                      </span>
                      $18.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {cartItems["specialItem"] ? (
                        <button
                          className="btn btn-outline-danger mt-auto"
                          onClick={() => handleToggleCart("specialItem")}
                        >
                          Remove from cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => handleToggleCart("specialItem")}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  <img
                    className="card-img-top"
                    src="../src/assets/sale.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">Sale Item</h5>
                      <span className="text-muted text-decoration-line-through">
                        $50.00
                      </span>
                      $25.00
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {cartItems["saleItem"] ? (
                        <button
                          className="btn btn-outline-danger mt-auto"
                          onClick={() => handleToggleCart("saleItem")}
                        >
                          Remove from cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => handleToggleCart("saleItem")}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="../src/assets/pop.jpg"
                    alt="..."
                  />
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
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {cartItems["popularItem"] ? (
                        <button
                          className="btn btn-outline-danger mt-auto"
                          onClick={() => handleToggleCart("popularItem")}
                        >
                          Remove from cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-dark mt-auto"
                          onClick={() => handleToggleCart("popularItem")}
                        >
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

        {/* Footer */}
        <header className="bg-dark py-1">
          <div className="container px-4 px-lg-5 my-4">
            <div className="text-center text-white">
              <p className="lead fw-normal text-white-50 mb-0">
              Copyright &copy; Your Website 2023
              </p>
            </div>
          </div>
        </header>
      </div>
    );
}

export default Navbar;
