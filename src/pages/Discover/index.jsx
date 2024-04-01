"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import Card from '../../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AuthorCard from '../../components/AuthorCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Range, getTrackBackground } from 'react-range';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const STEP = 1; 
const MIN = 0; 
const MAX = 1000;

//Index.auth = false; //newly added. this is for the authentication service

const Index = () => {
  const authors = [
    { authorName: "Enrico Lim", rating: "4.5" },
    { authorName: "Enrico Tan", rating: "4.6" },
    { authorName: "Enrico Toh", rating: "4.7" },
    { authorName: "Enrico A", rating: "4.9" },
    { authorName: "Enrico Zhao", rating: "4.1" },
    { authorName: "Enrico Qwek", rating: "4.2" },
    { authorName: "Enrico Lin", rating: "4.4" },
    { authorName: "Enrico Goh", rating: "4.0" },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [rating, setRating] = useState('');
  const [budget, setBudget] = useState({ min: 0, max: 1000 });

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search Term:', searchTerm);
    console.log('Country Filter:', countryFilter);
    console.log('Rating:', rating);
    console.log('Budget:', budget);
  };

  const totalCards = 60;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const cardIndices = Array.from({ length: cardsPerPage }, (_, i) => (currentPage - 1) * cardsPerPage + i);

  const paginate = (page) => {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    return Array.from({ length: end - start }, (_, i) => i + start);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleBudgetChange = (name, value) => {
    setBudget((prevBudget) => ({ ...prevBudget, [name]: value }));
  };

  return (
    <div className="container my-5">
      <h2>Trending this week</h2>
      <div style={{ position: 'relative' }}>
        <Slider {...settings}>
          {authors.map((author, index) => (
            <div key={index} style={{ padding: '0 20px' }}> 
              <AuthorCard authorName={author.authorName} rating={author.rating} />
            </div>
          ))}
        </Slider>
      </div>
      
  {/* Search Bar */}
  <div className="search-filters my-4 mt-5 mb-5">
        <form onSubmit={handleSearch} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className="form-control" value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}>
            <option value="">Select Country</option>
            <option value="Thailand">Thailand</option>
            <option value="Singapore">Singapore</option>
            <option value="USA">USA</option>
          </select>

          <select
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Rating</option>
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>{`${star} stars & up`}</option>
            ))}
          </select>

          <input
            type="number"
            className="form-control"
            placeholder="Min price"
            value={budget.min}
            onChange={(e) => handleBudgetChange('min', e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Max price"
            value={budget.max}
            onChange={(e) => handleBudgetChange('max', e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>

  {/* Itineraries Grid */}
  {Array.from({ length: 3 }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
          {cardIndices.slice(rowIndex * 4, (rowIndex + 1) * 4).map((cardIndex) => (
            <div key={cardIndex} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card />
            </div>
          ))}
        </div>
      ))}

      {/* Pagination */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
</div>
  );
};

export default Index;
