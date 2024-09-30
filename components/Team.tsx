import React from "react";
import Image from "next/image";

function Team() {
  return (
    <section id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#fbbc05]">
          Our Team
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="text-start border border-Grey py-10 px-5 rounded-lg hover:shadow-lg">
              <div className="mb-4 flex gap-5">
                <div className="flex flex-row w-[70px] h-[70px] rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src={`/team-member-${i + 1}.jpg`}
                    alt={`Team member ${i + 1}`}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div className="info flex flex-col text-start">
                  <h3 className="name text-black">Ansh Bhatt</h3>
                  <p className="position text-lightRed text-sm">Web Developer</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facere esse dolore sed velit et unde. Cumque atque maiores nihil.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
