import React from 'react'
import PageTitle from './PageTitle'
import { BlogList } from "../data/Data";
import { Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <section className="blog" id="blog">
        <Container>
          <Row>
              <PageTitle title="Our Latest Blog"/>              
          </Row>
          <Row>
          {BlogList.map((items, index) => (
          <div className='col-12 col-sm-12 col-md-4 mb-4'>
              
            <div className='blog-wrap'>
            <img src={items.cover} className="img-fluid" alt="cover" />
            <h3 className='mb-3'>{items.title}</h3>
            <p>{items.description}</p>
            <h4>Author: <span>{items.authorName}</span></h4>
           
        </div>
        </div>
            ))}

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Blog