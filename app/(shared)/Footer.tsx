import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            tenetur autem quidem molestias accusamus officia ut fugiat facilis
            dolorem quasi.
          </p>
          <p>Blog of the Future All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">LINKS</h4>
          <p className="my-5">Mass orc senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Ulamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">(021)8809-091</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
