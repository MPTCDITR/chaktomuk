import Lottie from "lottie-react";
import benefit from "@/asset/lottie/Digital Marketing.json";

export default function KeyBenefitLottie() {
  return (
    <div className="w-2/3 mx-auto">
      <Lottie animationData={benefit} loop={true} />
    </div>
  );
}
