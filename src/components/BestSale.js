import React from 'react'
import { special } from "../data/Data";
import { Container, Row, Button } from "react-bootstrap";
import PageTitle from './PageTitle';

const Bestsale = () => {
  return (
    <>
      <section className="bestsale"   id="special">
        <Container>       
          <Row><PageTitle title="Special Selection" /></Row>
          <Row> 
            {special.map((items, index) => (
              <div className="col-6 col-sm-6 col-md-3 mb-3" key={index}>
                <div className="bestsale-item">

                  <div className="bestsale-item-inner">
                    <div className="bestsale-item-inner_top">
                      <img
                        src={items.cover}
                        alt={items.title}
                        className="img-fluid"
                      />

                    </div>
                    <div className="bestsale-item-inner_bottom">
                      <h3>{items.title}</h3>
                      <span>{items.price}</span>
                      <Button className="btn">Add to Cart</Button>

                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Bestsale