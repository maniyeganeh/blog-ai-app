import React from 'react';
import SocialLinks from './SocialLinks';
import Subscribe from './Subscribe';
import Image from 'next/image';
import Ad2 from '/public/assets/ad-2.png';
import AboutProfile from '/public/assets/about-profile.jpg';
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-2 px-5 text-wh-50 text-xs text-center font-bold">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          className="hidden md:block my-8 w-full"
          style={{ objectFit: 'cover' }}
          alt="advert-2"
          placeholder="blur"
          width={500}
          height={1000}
          src={Ad2}
        />
      </div>
      <h4 className="bg-wh-900 py-2 px-5 text-wh-50 text-xs text-center font-bold">
        About the Blog
      </h4>
      <div className="bg-wh-900 my-3 flex justify-center">
        <Image
          style={{ width: '500px', height: '250px', objectFit: 'cover' }}
          alt="profile"
          placeholder="blur"
          sizes="(max-width:480px) 100vw , (max-width:760px) 75vw, (max-width:1060px) 50vw, 33vw"
          src={AboutProfile}
        />
      </div>
      <h4 className=" py-2 px-5 text-wh-500  text-center font-bold">
        Geofrrey Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        quasi.
      </p>
    </section>
  );
};

export default Sidebar;
