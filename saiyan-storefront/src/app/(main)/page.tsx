import About from "@modules/home/components/about"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Materials from "@modules/home/components/materials"
import Services from "@modules/home/components/services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Saiyan Prints",
  description:
    "Buy high-quality 3D printed products at the best price from Saiyan Prints. We offer a wide range of custom-made 3D items for all your needs.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProducts />
      <Materials />
      <About />
    </>
  )
}

export default Home
