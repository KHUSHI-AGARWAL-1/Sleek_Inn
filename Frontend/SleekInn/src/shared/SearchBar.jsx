import React from 'react'
import '../styles/searchBar.css'
import{Col,Form,FormGroup} from 'reactstrap'


function SearchBar() {
  return (
    <Col lg='12'>
        <div className='searchBar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going?' />
                    </div>
                </FormGroup>

                <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                    <span><i class="ri-map-pin-time-fill"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="numbeer" placeholder='Distance k/m' />
                    </div>
                </FormGroup>
               
                <FormGroup className='d-flex gap-3 form_group form_group-last'>
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type="text" placeholder='0' />
                    </div>
                </FormGroup>

                <span className='search-icon' type='submit'>
                <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar