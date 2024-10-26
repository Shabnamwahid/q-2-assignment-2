import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-r from-black to-gray-700 min-h-screen relative"
      style={{
        backgroundImage: "url('https://th.bing.com/th/id/R.85da07537b1d1e370bee6c084e915443?rik=j11q9m2wwCPh3g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Iapxl0PyALo%2fUx4JfEZ7PeI%2fAAAAAAAABGo%2fpnOcqFKFIuQ%2fs1600%2fTeriyakiChicken2.jpg&ehk=MRbgYNzfMbTfhJ%2b5XXosjVO%2fu1FZ5Um0LwUMpQv8KKE%3d&risl=&pid=ImgRaw&r=0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container max-h-auto px-4 md:px-8 grid grid-cols-10 sm:grid-cols-4 md:grid-cols-5 gap-6 h-full">
        
        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-auto flex flex-col">
          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-6 pb-6 pt-40 flex-grow">
            <Image
              src="https://wallpapercave.com/wp/wp3053215.jpg"
              alt="chinese-1"
              width={500}  // Replace with actual width
              height={300} // Replace with actual height
              className="h-80 w-full object-cover group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h1 className="z-10 text-10xl font-extrabold text-white absolute top-0 left-0 p-0 xs:text-xl md:text-5xl text-center">Chinese-Wok</h1>
          </a>
        </div>

        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-6 pb-6 pt-40 flex-grow mb-4">
            <Image
              src="https://th.bing.com/th/id/OIP.Nu9go-7jBWl5FY3FGR2ynAHaFj?rs=1&pid=ImgDetMain"
              alt="chinese-2"
              width={500}  // Replace with actual width
              height={300} // Replace with actual height
              className="h-80 w-full object-cover group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-5xl font-small text-gray-500 absolute top-0 left-0 p-7 xs:text-xl md:text-2xl text-left">Chinese-cuisine</h3>
          </a>
        </div>

        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-6 pb-6 pt-40 flex-grow mb-4">
            <Image
              src="https://media.cnn.com/api/v1/images/stellar/prod/220921081426-04-chinese-foods-ziao-long-bao.jpg?c=original&q=h_778,c_fill"
              alt="chinese-3"
              width={500}  // Replace with actual width
              height={300} // Replace with actual height
              className="h-96 w-full object-cover group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-5xl font-small text-gray-500 absolute top-0 left-0 p-7 xs:text-xl md:text-2xl text-left">Taste your taste-buds</h3>
          </a>

          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-6 pb-6 pt-40 flex-grow mb-4">
            <Image
              src="https://th.bing.com/th/id/OIP.gTDei4Y4_DZmS6PYcHDJJgAAAA?rs=1&pid=ImgDetMain"
              alt="chinese-4"
              width={500}  // Replace with actual width
              height={300} // Replace with actual height
              className="h-60 w-full object-cover group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-5xl font-small text-gray-500 absolute top-0 left-0 p-7 xs:text-xl md:text-2xl text-left">Feel the heavens</h3>
          </a>
        </div>

        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-6 pb-6 pt-40 flex-grow mb-4">
            <Image
              src="https://insanelygoodrecipes.com/wp-content/uploads/2021/01/Asian-Orange-Chicken-with-Green-Onions.png"
              alt="chinese-5"
              width={500}  // Replace with actual width
              height={300} // Replace with actual height
              className="h-80 min-w-60 object-cover group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-5xl font-small text-gray-500 absolute top-0 left-0 p-7 xs:text-xl md:text-2xl text-left">Yummy treat</h3>
          </a>

          <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-6 pb-6 pt-40 flex-grow mb-2">
            <Image
              src="https://www.chilitochoc.com/wp-content/uploads/2021/01/chinese-hot-and-sour-soup-1.jpg"
              alt="chinese-6"
              width={500}  // Replace with actual width
              height={300} // Replace with actual height
              className="max-h-full w-full object-cover group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-5xl font-small text-gray-500 absolute top-0 left-0 p-7 xs:text-xl md:text-2xl text-left">Sweet & sour</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
