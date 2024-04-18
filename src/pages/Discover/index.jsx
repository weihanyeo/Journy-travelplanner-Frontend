"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import AuthorCard from "../../components/AuthorCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Range, getTrackBackground } from "react-range";

import Post from "../../components/Post";
import SearchBar from "../../components/SearchBar";

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
  const totalCards = 60;
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5; // Display 5 cards per page
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const cardIndices = Array.from(
    { length: cardsPerPage },
    (_, i) => (currentPage - 1) * cardsPerPage + i
  );

  const paginate = (page) => {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    return Array.from({ length: end - start }, (_, i) => i + start);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container my-5">
      {/* <h2>Trending this week</h2>
      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          {authors.map((author, index) => (
            <div key={index} style={{ padding: "0 20px" }}>
              <AuthorCard
                authorName={author.authorName}
                rating={author.rating}
              />
            </div>
          ))}
        </Slider>
      </div> */}

      {/* Search Bar */}
      <SearchBar />

      {/* Itineraries Grid */}
      <div className="row">
        {cardIndices.map((cardIndex) => (
          <div key={cardIndex} className="col-12 mb-4">
            <Post />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* View More Button */}
      {currentPage < totalPages && (
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
