import React from 'react'
import {Container, Row} from 'react-bootstrap'

const Footer = () => {
  return (
   <>
   <div class="footer">
      <Container>
        <Row>
            <div className='col-md-4'>
              <h3>Newastore</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit dolor ipsam?</p>
            </div>
            <div className='col-md-4'>
            <h3>Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#collection">Collectoin</a></li>
              <li><a href="#blog">Blogs</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
            </div>
            <div className='col-md-4'>
            <h3>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit dolor ipsam?</p>            
             </div>
        </Row>
      </Container>
   </div>
   </>
  )
}

export default Footer