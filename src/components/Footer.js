import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer bg-dark text-light'>
      <div className='footer-links'>
        <div className='social-media-links'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='social-media-items pb-5'>
                  <div className='social-media-title'>
                    <h1 className='text-center'>You can find us at:</h1>
                    <div className='social-media-icons'>
                      <div className='social-media-icon fs-2 text-light'>
                        <FaFacebook />
                      </div>
                      <div className='social-media-icon fs-2 text-light ps-5'>
                        <FaInstagram />
                      </div>
                      <div className='social-media-icon fs-2 text-light ps-5'>
                        <FaTwitter />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='about-links '>
              <div className='row text-center pb-5 '>
                <div className='col-4'>
                  <div className='footer-column1 border-border-danger'>
                    <div className='column-title'>
                      <h4 className='title'>Column Title 1</h4>
                    </div>
                    <div className='column-links'>
                      <div className='column-item'>Link 1 Lorem Ipsum</div>
                      <div className='column-item'>Link 2 Lorem Ipsum</div>
                      <div className='column-item'>Link 3 Lorem Ipsum</div>
                      <div className='column-item'>Link 4 Lorem Ipsum</div>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='footer-column2 border-border-danger'>
                    <div className='column-title'>
                      <h4 className='title'>Column Title 2</h4>
                    </div>
                    <div className='column-links'>
                      <div className='column-item'>Link 1 Lorem Ipsum</div>
                      <div className='column-item'>Link 2 Lorem Ipsum</div>
                      <div className='column-item'>Link 3 Lorem Ipsum</div>
                      <div className='column-item'>Link 4 Lorem Ipsum</div>
                    </div>
                  </div>
                </div>
                <div className='col-4'>
                  <div className='footer-column3 border-border-danger'>
                    <div className='column-title'>
                      <h4 className='title'>Column Title 3</h4>
                    </div>
                    <div className='column-links'>
                      <div className='column-item'>Link 1 Lorem Ipsum</div>
                      <div className='column-item'>Link 2 Lorem Ipsum</div>
                      <div className='column-item'>Link 3 Lorem Ipsum</div>
                      <div className='column-item'>Link 4 Lorem Ipsum</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='copyright'>
                <div className='row'>
                  <h6 className='copyright-texts text-light text-center'>
                    &copy; <em id='date'></em>Shop 2021
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
