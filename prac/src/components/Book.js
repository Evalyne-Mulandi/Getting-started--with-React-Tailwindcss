 // src/components/Main.js

import React from 'react';

const Book = () => {
  return (
    <>
      {/* First Section */}
      <div className="flex md:flex-row flex-col mt-14 justify-center items-center mx-auto max-w-5xl space-y-3 gap-3 my-4">
        <div className="max-w-3xl">
          <img
            src="https://www.e2msolutions.com/wp-content/uploads/2022/06/oxygen-builder-development.png"
            alt="Image"
            className=""
          />
        </div>
        <div className="max-w-xl p-4">
          <h2 className="text-3xl text-black font-bold mb-4">
            Welcome to our bookmark site!
          </h2>
          <p className="text-lg text-black">
            We provide a comprehensive collection of bookmarks on various topics to help
            you save time and stay organized. Whether you're looking for the latest news,
            shopping deals, or educational resources, we've got you covered.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex md:flex-row mt-10 flex-col justify-center items-center mx-auto max-w-5xl space-y-3 gap-2 my-3">
        <div className="max-w-xl p-4">
          <h1 className="text-3xl font-bold mb-4 text-black">
            Discover Your Next Favorite Bookmark
          </h1>
          <p className="text-lg text-black">
            We are thrilled to share with you our curated collection of bookmarks,
            covering a vast range of topics to cater to all your interests and needs. From
            daily news to lifestyle tips, shopping, and educational resources, we've got
            you covered. Our bookmarks are designed to help you save time, stay organized
            and discover new exciting content with ease. Happy bookmarking!
          </p>
        </div>
        <div className="max-w-3xl">
          <img
            src="https://lh3.googleusercontent.com/FCTJV2u4ETqtkvFn0I1fY184UbdpWhqpAyyV6w7732ookhFnbAF_gBaWMNfAw28z_GhVeZmQIY7jbUuDlFEjWWv6ldLe7FvrJg4=w500"
            alt="Image"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Book;
