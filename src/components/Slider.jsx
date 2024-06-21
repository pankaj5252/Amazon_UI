import React, { useState, useEffect, useRef } from 'react';

const images = [
  {
    url: 'https://dailyasianage.com/library/1704481905_2.jpg',
    name: 'Image 1',
    paragraph: 'Extra 11% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337686978/TA/CN/WK/14357089/mdr-ex150ap-sony-microphone-earbuds-500x500.jpg',
    name: 'Image 2',
    paragraph: 'Extra 12% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    name: 'Image 3',
    paragraph: 'Extra 13% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://dailyasianage.com/library/1704481905_2.jpg',
    name: 'Image 4',
    paragraph: 'Extra 14% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337686978/TA/CN/WK/14357089/mdr-ex150ap-sony-microphone-earbuds-500x500.jpg',
    name: 'Image 5',
    paragraph: 'Extra 15% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    name: 'Image 6',
    paragraph: 'Extra 16% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://dailyasianage.com/library/1704481905_2.jpg',
    name: 'Image 7',
    paragraph: 'Extra 17% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337686978/TA/CN/WK/14357089/mdr-ex150ap-sony-microphone-earbuds-500x500.jpg',
    name: 'Image 8',
    paragraph: 'Extra 18% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    name: 'Image 9',
    paragraph: 'Extra 19% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://dailyasianage.com/library/1704481905_2.jpg',
    name: 'Image 10',
    paragraph: 'Extra 20% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337686978/TA/CN/WK/14357089/mdr-ex150ap-sony-microphone-earbuds-500x500.jpg',
    name: 'Image 11',
    paragraph: 'Extra 21% Off Now',
    brand:'Electronics'
  },
  {
    url: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    name: 'Image 12',
    paragraph: 'Extra 22% Off Now',
    brand:'Electronics'
  },
  // Add more images to the array
];

const Slider = () => {
  const [visibleImages, setVisibleImages] = useState(images);
  const [transition, setTransition] = useState(true);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => {
    setTransition(true);
    setVisibleImages((prevImages) => {
      const [firstImage, ...restImages] = prevImages;
      return [...restImages, firstImage];
    });
  };

  const prevSlide = () => {
    setTransition(true);
    setVisibleImages((prevImages) => {
      const lastImage = prevImages[prevImages.length - 1];
      return [lastImage, ...prevImages.slice(0, -1)];
    });
  };

  const handleTransitionEnd = () => {
    setTransition(false);
  };

  return (
    <div className="container-fluid p-1">
      <div className="bg-white p-4 rounded shadow-sm">
        <div className="relative w-full h-auto overflow-hidden">
          <div
            className={`flex ${transition ? 'transition-transform duration-500' : ''}`}
            style={{ transform: `translateX(-10%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {visibleImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 slider w-1/10">
                <img src={image.url} alt={image.name} className="w-full h-52" />
                <div className="card-content">
                  <h1 className="p-2 font-bold text-center name">{image.name}</h1>
                  <span className=" text-green-600 para">{image.paragraph}</span>
                  <h2 className="p-2 text-gay-600 brand">{image.brand}</h2>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent border ms-1 shadow-lg hover:bg-gray-600 rounded-xl text-white px-4 py-2"
            onClick={prevSlide}
          >
            <i className="fa fa-arrow-left text-black pt-2 pb-2"></i>
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent border me-1 shadow-lg hover:bg-gray-600 rounded-xl text-white px-4 py-2"
            onClick={nextSlide}
          >
            <i className="fa fa-arrow-right text-black pt-2 pb-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;