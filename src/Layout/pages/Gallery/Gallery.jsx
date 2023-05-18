const Gallery = () => {
  return (
    <div>
      <h1 className="text-center font-bold py-10 text-3xl dark:text-white">
        Our Lego Gallery
      </h1>

      <div className="container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-2">
          <div className="w-full row-span-2">
            <img
              src="https://images.brickset.com/news/73742_Panther%202A.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100"
            />
          </div>
          <div className="w-full col-span-2 row-span-2">
            <img
              src="https://m.media-amazon.com/images/I/71TXFrNebXL.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full ">
            <img
              src="https://cdn.dribbble.com/userupload/3569499/file/original-2b2f7c85628e027a073c58371a48c6c9.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src="https://i.ebayimg.com/images/g/fpEAAOSwomdhhUiY/s-l1600.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full col-span-2 row-span-2">
            <img
              src="https://bleedingcool.com/wp-content/uploads/2018/11/LEGO-DC-Super-Villains-Aquaman-DLC-Portrait-1200x900.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>

          <div className="w-full col-span-2">
            <img
              src="https://img.artpal.com/423151/49-20-8-7-8-46-22m.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src="https://cdnb.artstation.com/p/assets/images/images/046/080/449/large/fernando-chiriboga-r11bc-autofrotal.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src="https://cdn.dribbble.com/users/2541618/screenshots/8139466/media/6ae2086a453e9aa666d398070ad18640.jpg"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
