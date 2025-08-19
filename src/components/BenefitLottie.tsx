import React from "react";
import Lottie from "lottie-react";
import benefitLottie from "@/asset/lottie/feat-lottie.json";

export default function BenefitLottie() {
  return (
    <figure id="benefit-lottie" className="lg:w-2/3 w-full h-full mx-auto">
      <Lottie animationData={benefitLottie} loop={true} />
    </figure>
  );
}
