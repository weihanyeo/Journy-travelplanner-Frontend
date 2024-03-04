import React from "react";
//import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-white position-fixed w-100 bottom-0"
      style={{ height: "15%" }}
    >
      <div
        className="flex justify-between items-center flex-wrap
                mt-5 row"
      >
        <img src="journy.png" className="col-1 col-sm-1" />
        <p className="col-6 items-center flex justify-between">
          @2024 Journy. All Rights Reserved
        </p>

        <div className="footer__copyrights-link col-4 col-sm-4 ">
          <div href="/" className="text-grey-500 justify-content-end d-flex">
            Privacy policy
          </div>
          <div href="/" className="text-grey-500 justify-content-end d-flex">
            Terms of Use
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
