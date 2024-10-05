import React from "react";
import Link from "next/link";

function announcement() {
  return (
    <div className="bg-[#FBEBE9] text-[#C5221F] py-2 px-4 text-center relative z-10">
      <p className="text-sm font-medium">
        New event announced! Join us for the Info Session on October 2nd.{" "}
        <Link href="#" className="underline hover:text-[#ea4335]">
          Learn more
        </Link>
      </p>
    </div>
  );
}

export default announcement;
