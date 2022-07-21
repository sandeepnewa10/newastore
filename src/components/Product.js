import React, { useState } from "react";
import { collection } from "../data/Data";
import { Container, Row } from "react-bootstrap";
import PageTitle from './PageTitle';


const Product = () => {
  const [data, setData] = useState(collection);
  const filterResult = (catItem) => {
    const result = collection.filter((currentData) => {
      return currentData.category === catItem;
    });
    setData(result);
  };

  return (
    <section className="bestsale" id="collection">
      <Container>
        <Row><PageTitle title="New Collection" /></Row>
        <div className="text-center mb-5">
          <button className="btn mx-2" onClick={() => setData(collection)} >
            All
          </button>
          <button className="btn mx-2" onClick={() => filterResult("Best sellers")}>
            Best Sellers
          </button>

          <button className="btn mx-2" onClick={() => filterResult("Featured")}>
            Featured
          </button>
          <button className="btn mx-2" onClick={() => filterResult("New Arrival")}>
            New Arrival
          </button>


        </div>
        <Row>
          {data.map((values) => {
            const { id, title, price, cover } = values;
            return (

              <div className="col-6 col-sm-6 col-md-3 mb-5" key={id}>
                <div className="bestsale-item">
                  <div className="bestsale-item-inner">
                    <div className="bestsale-item-inner_top">
                      <img src={cover} alt={title} className="img-fluid"/>
                    </div>
                    <div className="bestsale-item-inner_bottom">
                      <h3>{title}</h3>
                      <span>{price}</span>
                      <button className="btn mx-2">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Product