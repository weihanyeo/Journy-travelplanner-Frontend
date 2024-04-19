import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AuthorCard = ({ authorName, rating }) => {
  return (
    <div className="card text-center">
      <div className="card-img-top square-image-wrapper">
        <Image
          src="/profileimg.jpg"
          alt="Author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="card-footer">
        <span>{authorName}</span> &middot; <span><FontAwesomeIcon icon={faStar} style={{color: "#ffb83d",}} /> {rating} </span>
      </div>
      <style jsx>{`
        .card {
          border: 1px solid #e0e0e0; /* Adjust border color as needed */
          border-radius: 4px; /* Adjust border-radius as needed */
          overflow: hidden; /* Ensures the image doesn't exceed the card boundaries */
        }
        .square-image-wrapper {
          position: relative;
          width: 100%; /* Take up full width of the parent */
          height: 0; /* Initially set to 0 */
          padding-top: 100%; /* Padding top is the same as width, forces square */
        }
        .card-footer {
          padding: 0.5rem;
          background-color: #f8f9fa; /* Adjust footer background as needed */
          border-top: 1px solid #e0e0e0; /* Adjust border color as needed */
        }
        .card img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default AuthorCard;

