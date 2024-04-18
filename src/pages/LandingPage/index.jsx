import React from "react";
import SearchBar from "../../components/SearchBar";

const LandingPage = () => {
  return (
    <div className="contain-landing">
      {/* Hero Section */}
      <div className="heroSection">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="heroContent">
              <h1 className="heroTitle">Embark on Your Journey with Journy</h1>
              <p className="heroSubtitle">
                Discover new adventures, connect with fellow travelers, and
                create unforgettable memories.
              </p>
              <SearchBar />
            </div>
          </div>
          <div className="col-md-6">
            <div className="heroImage">
              <img src="/widget8.png" alt="Adventure" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="featuresSection">
        <div className="row">
          <div className="col-md-4">
            <div className="feature">
              <i className={`fas fa-map-marked-alt fa-3x featureIcon`}></i>
              <h3>Discover</h3>
              <p>Explore new destinations and uncover hidden gems.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className={`fas fa-users fa-3x featureIcon`}></i>
              <h3>Connect</h3>
              <p>Connect with like-minded travelers and share experiences.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className={`fas fa-calendar-alt fa-3x featureIcon`}></i>
              <h3>Plan</h3>
              <p>Create personalized itineraries and plan your adventures.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonialsSection">
        <div className="row">
          <div className="col-md-6">
            <div className="testimonial">
              <p>
                "Journy helped me discover amazing places and connect with
                fellow travelers. It's my go-to app for planning adventures!"
              </p>
              <p className="author">- Emily, Adventure Enthusiast</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial">
              <p>
                "I love how easy it is to create and share itineraries with
                friends. Journy has made traveling so much more enjoyable for
                me."
              </p>
              <p className="author">- Michael, Backpacker</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="ctaSection">
        <div className="text-center">
          <h2>Start Your Adventure Today</h2>
          <p className="lead">
            Join thousands of travelers worldwide and make every journey
            unforgettable with Journy.
          </p>
          <button
            className={`btn btn-warning btn-lg ctaButton`}
            onClick={() => router.push("/Login")}
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
