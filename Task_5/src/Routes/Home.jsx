import React from 'react'
import { Link } from 'react-router-dom'
import about from '../assets/about.png'  

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="welcome">
          <p className="wel">Welcome to</p>
          <p className="main">Fashion Corner</p>
          <p className="des">Where Style Meets Elegance – Discover Your Perfect Look</p>
          <div className="social-media">
            <a href="https://github.com/Ali-EL-Badry">
              <box-icon name='pinterest' type='logo' color='#e88b06' size="md"></box-icon>
            </a>
            <a href="https://www.linkedin.com/in/aly-el-badry/">
              <box-icon type='logo' name='facebook' color='#e88b06' size="md"></box-icon>
            </a>
            <a href="https://www.instagram.com/aly_aibak/">
              <box-icon name='instagram-alt' type='logo' color='#e88b06' size="md"></box-icon>
            </a>
          </div>
          <div className="place_button">
            <Link to='/products' className='btn'>Discover Now</Link>
          </div>
          <div className="onfire">
            <p className="mn">Don't miss Our Summer Offers 🔥</p>
            <p className="details">Refresh Your Wardrobe with the Hottest Trends of the Season!</p>
          </div>
        </div>
        <div className="section--divider">
          <div className="text-with-icons" 
              data-section-id="template--18176368902367__30a6170e-0d1c-4d42-a7b7-5dec510392e7" 
              data-section-type="text-with-icons">
            <div className="page-width">
              <div className="text-with-icons__blocks has-3-per-row" data-block-count="3">
              
                <div className="text-with-icons__block text-center">
                  <div className="text-with-icons__block-icon">
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-tcwi-ribbon" viewBox="0 0 100 100">
                      <path 
                        d="M44.18 67.51L30 89.72l-4.44-12.19-12.93 1.1 14.19-22.18a28.86 28.86 0 0 0 13.79 10.08 26.93 26.93 0 0 0 3 .85zM87.37 78.63l-12.93-1.1L70 89.72 55.81 67.51l.63-.13a26.76 26.76 0 0 0 2.94-.85 28.8 28.8 0 0 0 13.8-10.08z"
                        style={{ fill: 'none', stroke: '#000', strokeWidth: '2px' }}
                      />
                      <path 
                        d="M78.92 39.19a28.82 28.82 0 0 1-3.61 14 30 30 0 0 1-1.74 2.73 5 5 0 0 1-.39.52 28.8 28.8 0 0 1-13.79 10.09 26.76 26.76 0 0 1-2.94.85l-.63.13a29 29 0 0 1-11.63 0l-.62-.13a26.93 26.93 0 0 1-3-.85 28.86 28.86 0 0 1-13.75-10.08c-.13-.17-.26-.34-.38-.52q-.93-1.32-1.74-2.73a28.92 28.92 0 1 1 54.22-14z"
                        style={{ fill: 'none', stroke: '#000', strokeWidth: '2px' }}
                      />
                      <path 
                        d="M56.95 42.84l1.63 9.55L50 47.88l-8.58 4.51 1.64-9.55-6.95-6.77 9.6-1.39 4.29-8.7 4.29 8.7 9.6 1.39-6.94 6.77z"
                        style={{ fill: 'none', stroke: '#000', strokeWidth: '2px' }}
                      />
                    </svg>
                  </div>
                  <div className="text-with-icons__block-title">
                    <h3>Satisfaction Guarantee</h3>
                  </div>
                  <div className="text-with-icons__block-text">
                    <p>We do our best to ensure the highest possible quality in everything we do. However, if you’re not satisfied, we always offer a 14-day satisfaction guarantee.</p>
                  </div>
                </div>

                {/* Block 2: Organic Cotton */}
                <div className="text-with-icons__block text-center">
                  <div className="text-with-icons__block-icon">
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-tcwi-plant" viewBox="0 0 100 100">
                      <path 
                        d="M15.33 86.58h69.34s-30.67-40.37-69.34 0zM43.15 46.69s9 8.83 9.27 22M82.06 13.43s-27.38-1.32-25.37 25.16c0 0 23 5.54 25.37-25.16zM82.06 13.43L56.69 38.59M63.19 32.17l13.16-.45M70.05 25.35l9.7-.34M63.19 32.17l.45-13.07M70.05 25.35l.34-9.91M50.64 59.11a32.68 32.68 0 0 1 6-20.52M18 21.31S16.67 48.7 43.15 46.69c0 0 5.54-23-25.15-25.38zM17.99 21.31l25.16 25.38M36.73 40.19l-.45-13.16M29.91 33.33l-.34-9.7M36.73 40.19l-13.08-.45M29.91 33.33L20 32.99"
                        style={{ fill: 'none', stroke: '#000', strokeWidth: '2px' }}
                      />
                    </svg>
                  </div>
                  <div className="text-with-icons__block-title">
                    <h3>Organic Cotton</h3>
                  </div>
                  <div className="text-with-icons__block-text">
                    <p>According to organic agricultural guidelines, which are a method of farming that works with nature rather than against it, organic cotton is produced and certified.</p>
                  </div>
                </div>

                {/* Block 3: Privacy */}
                <div className="text-with-icons__block text-center">
                  <div className="text-with-icons__block-icon">
                    <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-tcwi-shield" viewBox="0 0 100 100">
                      <path 
                        d="M51.18 7.63c5.54 3.1 17.09 8.07 34.33 8.07h1.07v23.72A56.14 56.14 0 0 1 80 66.07C73.58 78 63.89 85.62 51.18 88.83 38.48 85.62 28.79 78 22.36 66.06a56.08 56.08 0 0 1-6.58-26.64V15.7h1.07c17.25 0 28.8-4.97 34.33-8.07z"
                        style={{ fill: 'none', stroke: '#000', strokeWidth: '2px' }}
                      />
                      <path 
                        d="M66.15 37.87L45.43 58.59l-9.21-9.21"
                        style={{ fill: 'none', stroke: '#000', strokeWidth: '2px' }}
                      />
                    </svg>
                  </div>
                  <div className="text-with-icons__block-title">
                    <h3>Privacy</h3>
                  </div>
                  <div className="text-with-icons__block-text">
                    <p>We make sure that your personal information is not shared with any other entities. Our customers' privacy matters to us.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="image">
            <img src={about} alt="About Fashion Corner" />
          </div>
          <div className="content">
            <p className='head'>About Us</p>
            <p>Your ultimate fashion destination, blending contemporary style with classic elegance. Explore a curated collection that suits every occasion, whether you're dressing up for a night out or keeping it casual. From chic tops to statement accessories, we bring you the latest trends at accessible prices. Our mission is to empower you to express your unique style with confidence and flair.</p>
            <div className="categories">
              <div className="cat">
                <box-icon type='solid' name='right-arrow-circle'></box-icon>
                <div class="content">
                  <div class="fi">Our Mission</div>
                  <div class="se">At Fashion Corner, we strive to inspire confidence through fashion. We believe that everyone deserves to look and feel their best.</div>
                </div>
              </div>
              <div className="cat">
                <box-icon type='solid' name='right-arrow-circle'></box-icon>
                <div class="content">
                  <div class="fi">Our collection</div>
                  <div class="se">From chic casual wear to elegant evening outfits, our diverse range caters to every style and occasion. </div>
                </div>
              </div>
              <div className="cat">
                <box-icon type='solid' name='right-arrow-circle'></box-icon>
                <div class="content">
                  <div class="fi">our Values</div>
                  <div class="se">We are committed to inclusivity, quality, and sustainability.that drive us to source responsibly and design pieces that is fashionable and also kind to the planet</div>
                </div>
              </div>
              <div className="cat">
                <box-icon type='solid' name='right-arrow-circle'></box-icon>
                <div class="content">
                  <div class="fi">Why Shop With Us?</div>
                  <div class="se">At Fashion Corner, you’re not just a customer; you’re part of our fashion family. Enjoy a seamless shopping experience and personalized service.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opinions">
          <p className="head">Our Customers' Opinions</p>
          <div className="three">
            <div className="op">
              <div className="content">
                <div className="profile">
                  <img src="https://via.placeholder.com/60x60.png?text=No+Photo" alt="No Photo" className="profile-pic" />
                  <div className="info">
                    <div className="name">Jane Doe</div>
                    <div className="data">August 25, 2024</div>
                  </div>
                </div>
                <div className="review">
                  "Fashion Corner always has the best selection! I love how they keep up with the latest trends and offer unique pieces that I can't find anywhere else."
                </div>
              </div>
            </div>
            <div className="op">
              <div className="content">
                <div className="profile">
                  <img src="https://via.placeholder.com/60x60.png?text=No+Photo" alt="No Photo" className="profile-pic" />
                  <div className="info"> 
                    <div className="name">John Smith</div>
                    <div className="data">September 3, 2024</div>
                  </div>
                </div>
                <div className="review">
                  "Great quality and even better prices! I've been shopping at Fashion Corner for years and they never disappoint. Highly recommended!"
                </div>
              </div>
            </div>
            <div className="op">
              <div className="content">
                <div className="profile">
                  <img src="https://via.placeholder.com/60x60.png?text=No+Photo" alt="No Photo" className="profile-pic" />
                  <div className="info">
                    <div className="name">Emily Johnson</div>
                    <div className="data">September 1, 2024</div>
                  </div>
                </div>
                <div className="review">
                  "I recently discovered Fashion Corner and I'm obsessed! The customer service is fantastic and their online shop is super easy to navigate."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
