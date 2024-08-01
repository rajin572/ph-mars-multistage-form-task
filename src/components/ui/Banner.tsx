/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "./Container";
import { Button } from "./button";
import backgroundImage from "@/assest/background.jpg";

const Banner = () => {
  return (
    <div
      className=" bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <Container>
        <div className="flex justify-center items-center text-center flex-col">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
            We Are Mars-Bound
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
            Won't You Join Us
          </h2>
          <p className="text-[#DCBF80] mb-10 text-xs md:text-sm">
            Since The Begining Of Time, Humans Have Wonderd What
            <br />
            Waits Us For Above. It Is Time To Find Out
          </p>
          <div>
            <Button className="bg-[#DF0000] text-white rounded-3xl">
              Start The Application
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
