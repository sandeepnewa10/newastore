import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PageTitle from './PageTitle'
import { topRate, bestSale, onSale } from "../data/Data";

const YearSale = () => {
  return (
   <>
   <section className='product-wrap'id="popular">
      <Container>
        <Row>
            <PageTitle title="Popular Of this Year"/>
        </Row>
        <Row>
            <div className='col-12 col-md-4'>
              <div className="product-wrap__widget">
              <h3>Top Rate</h3>
              <ul>{topRate.map((items, index) => (
                  <li>
                      <figure> <img src={items.cover} className="img-fluid" alt="cover" /></figure>
                      <figcaption>
                        <h4>{items.title}</h4>
                        <span>{items.price}</span>
                      </figcaption>
                  </li>
                   ))}
              </ul>
              </div>
            </div>
            <div className='col-12 col-md-4'>
            <div className="product-wrap__widget">
              <h3>Best Selling</h3>
              <ul>{bestSale.map((items, index) => (
                  <li>
                      <figure> <img src={items.cover} className="img-fluid" alt="cover" /></figure>
                      <figcaption>
                        <h4>{items.title}</h4>
                        <span>{items.price}</span>
                      </figcaption>
                  </li>
                   ))}
              </ul>
            </div>
            </div>
            <div className='col-12 col-md-4'>
            <div className="product-wrap__widget">
              <h3>On Sale</h3>
              <ul>{onSale.map((items, index) => (
                  <li>
                      <figure> <img src={items.cover} className="img-fluid" alt="cover" /></figure>
                      <figcaption>
                        <h4>{items.title}</h4>
                        <span>{items.price}</span>
                      </figcaption>
                  </li>
                   ))}
              </ul>
            </div>
            </div>
        </Row>
      </Container>
   </section>
   </>
  )
}

export default YearSale



// {BlogList.map((items, index) => (
//   <div className='col-12 col-sm-12 col-md-4 mb-4'>
      
//     <div className='blog-wrap'>
//     <img src={items.cover} className="img-fluid" alt="cover" />
//     <h3 className='mb-3'>{items.title}</h3>
//     <p>{items.description}</p>
//     <h4>Author: <span>{items.authorName}</span></h4>
   
// </div>
// </div>
// ))}