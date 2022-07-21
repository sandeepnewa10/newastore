import React from 'react'
import PageTitle from './PageTitle'
import Image from '../images/women.jpg'
import {Container, Row} from 'react-bootstrap'

const About = () => {
  return (
    <>
      <section id="about">
        <Container>
          <Row>
              <PageTitle title="About Us"/>
          </Row>
          <Row>
              <div className='col-12 col-md-6 mb-3'>
                <img src={Image} className="img-fluid" alt='about'/>
              </div>
              <div className='col-12 col-md-6 mb-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet justo vitae lacus viverra efficitur. Praesent fermentum quam eget posuere feugiat. Proin id vestibulum mauris. Aliquam erat volutpat.</p>
                <p>Fusce sem lectus, ornare rutrum euismod at, aliquam non lectus. Etiam ultrices at nulla eu semper. Integer eleifend dolor sed nunc dictum tempor. Sed placerat lacinia blandit. Nulla congue turpis vel erat aliquam pharetra. Pellentesque elementum euismod leo, ac hendrerit nibh cursus at.</p>
              </div>
          </Row>
        </Container>
       
      </section></>

  )
}

export default About