import React from 'react'
import '../styles/home.css'
import{Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import world from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import  SearchBar from '../shared/SearchBar'
function Home() {
  return (
   <>
   <section>
   <Container>
    <Row>
      <Col lg='6'>
        <div className='hero_content'>
          <div className="hero_subtitle d-flex align-items-centert">
            <Subtitle subtitle={'Unfold your world'}/>
            <img src={world} alt="" />
          </div>
          <h1>Travelling opens the door to creating {" "} <span className='highlight'>memories</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus, ipsam reiciendis voluptates natus fugiat aspernatur consectetur facere velit maiores!</p>
        </div>
      </Col>

      <Col lg='2'>
        <div className='hero_img-box'>
          <img src={heroImg} alt=""/>
        </div>
      </Col>
      <Col lg='2'>
        <div className='hero_img-box mt-4'>
          <video src={heroVideo} alt="" controls/>
        </div>
      </Col>
      <Col lg='2'>
        <div className='hero_img-box mt-5'>
          <img src={heroImg02} alt=""/>
        </div>
      </Col>
      <SearchBar/>
    </Row>
   </Container>
   </section>
   </>
  )
}

export default Home