import Laptop from "@modules/common/icons/laptop"
import ServiceCard from "./ServiceCard"
import Gift from "@modules/common/icons/gift"
import Printer from "@modules/common/icons/printer"

const Services = () => {
  return (
    <div id="services" className="hero bg-slate-900 text-neutral-content py-12">
      <div className="content-container flex flex-col justify-evenly text-center">
        <div className="flex flex-col px-4">
          <h2 className="text-5xl font-bold mb-8">Services</h2>
          <p className="text-xl">
            3D Printing has endless possibilities, from toys to functional boat
            and car parts. Your appliances may even have some printed parts from
            the factory!
          </p>
        </div>
        {/* TODO: Animation for cards  */}
        <div className="grid xsmall:grid-cols-1 md:grid-cols-2 lg:grid-co xl:grid-cols-3 gap-4 text-center py-12">
          {items.map((service, i) => (
            <ServiceCard service={service} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

const items = [
  {
    icon: <Gift size={70} color="#1eb854" />,
    title: "Gifts and Toys",
    description:
      "Need something for a Halloween costume, cosplay outfit or just random toys and gifts for the holidays? We have a ton of options that we can print out for you!",
  },
  {
    icon: <Laptop size={70} color="#1eb854" />,
    title: "Custom Designs",
    description:
      "Need a hard to find part that can easily be designed in software and printed? Give us the dimensions or the old piece and we can make one from scratch!",
  },
  {
    icon: <Printer size={70} color="#1eb854" />,
    title: "3D Printing Service",
    description:
      "Have a .stl file from thingiverse, cults3d, or thangs and need it printed? We can send a quote before printing to see the cost beforehand!",
  },
]
