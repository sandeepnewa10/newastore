import React from 'react'
import { Container, Row, Button } from "react-bootstrap";

const Offer = () => {
  return (
    <>
      <section className="special">
        <Container>
          <Row>
            <div className="special-inner">
                  <span>
                  Discount Up To 40%
                  </span>
                  <h2>Grand Sale Offer!</h2>
                  <Button className="btn">Buy Now</Button>
            </div>  
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Offer