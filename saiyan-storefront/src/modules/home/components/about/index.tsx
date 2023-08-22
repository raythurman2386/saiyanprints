import Image from "next/image"

const About = () => {
  return (
    <div
      id="about"
      className="hero bg-neutral-content text-base-200 flex flex-col justify-evenly text-center py-12"
    >
      <div className="flex flex-col px-4 w-8/12 py-12">
        <h2 className="text-5xl font-bold mb-8">About</h2>
        <p className="text-lg">
          See where we have come from and follow our journey!
        </p>
      </div>
      <div className="grid grid-row-4 gap-4 text-center p-8">
        {abouts.map((about, i) => (
          <div className="flex flex-col justify-center align-center" key={i}>
            <p className="p-2 text-lg font-semibold">{about.date}</p>
            <Image
              height={150}
              width={150}
              className="rounded-full m-auto p-2 bg-slate-200"
              src={about.imgUrl}
              alt={about.title}
            />
            <h2 className="text-2xl font-semibold py-4" key={about.title + i}>
              {about.title}
            </h2>
            <p className="m-auto text-center sm:w-8/12 md:w-10/12 lg:w-6/12">
              {about.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About

const abouts = [
  {
    date: "2021-03-01",
    imgUrl: "/about/1.jpg",
    title: "Humble Beginnings",
    description:
      "Aquired our first printer and began learning everything we could about printing and creating functional parts.",
  },
  {
    date: "2021-08-07",
    imgUrl: "/about/2.jpg",
    title: "A Store is Born",
    description:
      "An Etsy shop was created to start selling items, designs, and slowly draw attention to the business through Etsy and Instagram.",
  },
  {
    date: "2021-09-24",
    imgUrl: "/about/3.jpg",
    title: "Transition to Full Service",
    description:
      "Website built and deployed with the eCommerce portion of the site currently in development to run alongside of the Etsy Shop.",
  },
  {
    date: "2022-04-03",
    imgUrl: "/about/4.jpg",
    title: "Storefront Location",
    description:
      "My wife and I moved and in our new home of Oklahoma we have a storefront for my wife's candles, my printing, and our friends woodworking shops!",
  },
  {
    date: "2023-08-31",
    imgUrl: "/about/1.jpg",
    title: "Full Standalone Store",
    description:
      "Finally broke away from the crutch that is Shopify and Etsy and built my own E-Commerce store.",
  },
]
