import React from 'react'

import PropTypes from 'prop-types'

const Search = (props) => {
  return (
    <>
      <div className={`search-container ${props.rootClassName} `}>
        <div className="search-container1"></div>
      </div>
      <style jsx>
        {`
          .search-container {
            width: 728px;
            height: 379px;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-start;
            background-color: rgba(51, 51, 51, 0.85);
          }
          .search-container1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  )
}

Search.defaultProps = {
  heading1: 'Token',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  imageAlt: 'image',
  heading: 'Price:',
}

Search.propTypes = {
  heading1: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
}

export default Search
