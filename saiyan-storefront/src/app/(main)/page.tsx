import About from "@modules/home/components/about"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Materials from "@modules/home/components/materials"
import Services from "@modules/home/components/services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
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
