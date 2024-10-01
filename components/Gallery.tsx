import React from "react";
import Image from "next/image"; // Import Image from 'next/image'

function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-white flex items-center justify-center ">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ea4335]">
          Community Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto w-full">
          <div className="col-span-1 sm:col-span-2 bg-[#8ab4f8] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=600&text=Gallery+Image+1"
              alt="Gallery image 1"
              width={600}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 bg-[#81c995] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&text=Gallery+Image+2"
              alt="Gallery image 2"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 bg-[#fde293] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&text=Gallery+Image+3"
              alt="Gallery image 3"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 bg-[#f28b82] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&text=Gallery+Image+4"
              alt="Gallery image 4"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 bg-[#8ab4f8] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=600&text=Gallery+Image+5"
              alt="Gallery image 5"
              width={600}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1 bg-[#81c995] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300&text=Gallery+Image+6"
              alt="Gallery image 6"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
