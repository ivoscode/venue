import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25650.099384177807!2d-1.4280542036165687!3d53.39747481380524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487977f43c82336f%3A0x64fb7ac984b760e7!2sDon+Valley+Bowl%2C+Sheffield+S9+2DF!5e0!3m2!1sen!2suk!4v1552061118304"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
