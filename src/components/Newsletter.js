import React from 'react'
import { Container, Row } from "react-bootstrap";
import PageTitle from './PageTitle';
const Newsletter = () => {
  return (
    <>
    <section className="newsletter">
        <Container>
          <Row>
            <PageTitle title="Newsletter Subscription"/>
          </Row>
          <Row>
              <div class="newsletter__inner">
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem officia accusantium maiores quisquam dolorum?
                  </p> 
                  <div class="input-group mb-3 mt-3">
                    <input type="text" class="btn text-star" placeholder="Enter Your Email ..."/>
                    <button class="btn" type="submit">Subscribe</button>
                </div>                
              </div>
          </Row>
        </Container>
    </section>
    </>
  )
}

export default Newsletter