import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32 mx-2">
        <div className=" bg-slate-800/70 p-12">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Welcome to Saiyan Prints
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          We have a huge selection of 3d prints to choose from. If you don't see a specific item in our shop you would like, please contact us!
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>

        </div>
      </div>
      <Image
        src="/hero.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="3D Printing by Saiyan Prints"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
