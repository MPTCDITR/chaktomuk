import Lottie from 'lottie-react'
import whyUsLottie from '@/asset/lottie/feat-lottie.json';

export default function WhyUsLottie() {
  return (
    <figure id="why-us-lottie" className="lg:w-2/3 w-full h-full mx-auto">
      <Lottie animationData={whyUsLottie} loop={true} />
    </figure>
  )
}
