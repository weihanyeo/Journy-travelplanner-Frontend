import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <div className="container">
      {/* Introduction Section */}
      <div className="full-screen-section">
        <motion.div
          className="margin-landing"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="landing-container row justify-content-center">
            <div className="text-container col-lg-6 col-md-8 col-sm-10">
              <h1>
                Embark on Your Journey of Discovery with <b>Journy</b>
              </h1>
              <p className="lead">Where Adventure Meets Collaboration</p>
              <p>Explore, Share, Create - Your Ultimate Travel Companion</p>
            </div>
            <motion.div
              className="image-container col-lg-6 col-md-8 col-sm-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                src="/landingPage.png"
                alt="Adventure"
                className="img-fluid rounded"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="full-screen-section">
        <motion.div
          className="container mt-5"
          whileInView={{ opacity: [0.2, 1] }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <h2 className="text-center mb-4">
            Experience the extraordinary with Journy
          </h2>
          <p className="lead text-center">
            Collaborate, share, and personalize itineraries with our innovative
            social feature. Join a community of adventurers, fuel your
            wanderlust, and embark on unforgettable journeys. Let every trip be
            a canvas for inspiring memories.
          </p>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="full-screen-section">
        <motion.div
          className="container mt-5"
          whileInView={{ opacity: [0.2, 1] }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <section className="features-section mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="feature">
                    <i className="fas fa-map-marked-alt fa-3x mb-3"></i>
                    <h3>Discover</h3>
                    <p>Explore new destinations and uncover hidden gems.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature">
                    <i className="fas fa-users fa-3x mb-3"></i>
                    <h3>Connect</h3>
                    <p>
                      Connect with like-minded travelers and share experiences.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature">
                    <i className="fas fa-calendar-alt fa-3x mb-3"></i>
                    <h3>Plan</h3>
                    <p>
                      Create personalized itineraries and plan your adventures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="full-screen-section">
        <motion.div
          className="container mt-5"
          whileInView={{ opacity: [0.2, 1] }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <section className="testimonials-section mt-5">
            <div className="container">
              <h2 className="text-center mb-4">What Our Users Say</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>
                      "Journy helped me discover amazing places and connect with
                      fellow travelers. It's my go-to app for planning
                      adventures!"
                    </p>
                    <p className="author">- Emily, Adventure Enthusiast</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial">
                    <p>
                      "I love how easy it is to create and share itineraries
                      with friends. Journy has made traveling so much more
                      enjoyable for me."
                    </p>
                    <p className="author">- Michael, Backpacker</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="full-screen-section">
        <motion.div
          className="container mt-5"
          whileInView={{ opacity: [0.2, 1] }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <section className="cta-section mt-5">
            <div className="container">
              <h2 className="text-center mb-4">Start Your Adventure Today</h2>
              <p className="lead text-center">
                Join thousands of travelers worldwide and make every journey
                unforgettable with Journy.
              </p>
              <div className="text-center">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => router.push("/Login")}
                >
                  Sign Up Now
                </button>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
