import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="app-component-image"
        />
        <h1 className="app-component-text">{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .app-component-container {
            width: 100%;
            height: 100%;
            min-height: 100vh;
            display: flex;
            z-index: 300;
            position: relative;
            align-items: center;
            flex-direction: column;
            backdrop-filter: blur(100px);
            justify-content: center;
            min-height: 100vh;
            background: rgba(0, 0, 0, 0.7);
          }
          .app-component-image {
            width: auto;
            height: 150px;
            object-fit: cover;
            animation-name: rotateIn;
            animation-delay: 0s;
            animation-duration: 800ms;
            animation-direction: normal;
            animation-iteration-count: 100;
            animation-timing-function: ease;
          }
          .app-component-text {
            color: initial;
            font-size: 1em;
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          @media (max-width: 767px) {
            .app-component-container {
              height: auto;
              min-height: 80vh;
            }
            .app-component-image {
              animation-name: rotateIn;
              animation-delay: 0s;
              animation-duration: 1000ms;
              animation-direction: normal;
              animation-iteration-count: 100;
              animation-timing-function: ease;
            }
          }
          @media (max-width: 479px) {
            .app-component-container {
              min-height: 100vh;
              width: auto;
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  heading: 'Please wait....',
  imageSrc: '/favicon-200h.webp',
  imageAlt: 'image',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default AppComponent
