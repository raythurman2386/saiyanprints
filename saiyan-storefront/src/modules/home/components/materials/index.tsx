import Card from "./Card"

const Materials = () => {
  return (
    <div id="materials" className="hero min-h-screen bg-base-200 py-20">
      <div className="content-container flex flex-col justify-evenly text-center">
        <div className="flex flex-col px-4">
          <h2 className="text-5xl font-bold mb-8">Materials</h2>
          <p className="text-lg">
            There are a variety materials that can be printed depending on the
            strength needed for your item. Contact us today to discuss material
            selection!
          </p>
        </div>
        <div className="grid xsmall:grid-cols-1 md:grid-cols-2 lg:grid-co xl:grid-cols-3 gap-4 text-center py-12">
          {materials.map((material, i) => (
            <Card material={material} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Materials

const materials = [
  {
    imgUrl: "/materials/pla.webp",
    title: "PLA/PLA Plus",
    description:
      "Affordable option for prototyping and testing dimensions, tolerances, aesthetics, and basic functionality. PLA is a strong durable material, and PLA Plus improves on standard PLA weaknesses and gives this filament the ability to print functional parts.",
  },
  {
    imgUrl: "/materials/petg.webp",
    title: "PETG",
    description:
      "Polyethylene Terephthalate Glycol - Water bottle and medical device manufacturers commonly use this material for the combination of strength and chemical resistance.",
  },
  {
    imgUrl: "/materials/abs.webp",
    title: "ABS/ASA",
    description:
      "ABS plastic maintains the same functionality as PLA while also being resistant to high impact. ABS is commonly used for outdoor and automotive applications. ASA is a slight upgrade from ABS simply in it's printability and UV Resistance.",
  },
  {
    imgUrl: "/materials/nylon.webp",
    title: "Nylon",
    description:
      "The use of Nylon in additive manufacturing has allowed for the production of functional parts, mainly gears. Nylon is abrasive resistant, flexible and extremely durable.",
  },
  {
    imgUrl: "/materials/cf.webp",
    title: "Carbon Fiber",
    description:
      "Carbon Fiber in additive manufacturing is used as a composite material that can be added to existing materials to increase strength and stiffness. Most commonly added to form Carbon Fiber Nylon and Carbon Fiber PETG and Carbon Fiber PLA.",
  },
  {
    imgUrl: "/materials/manymore.webp",
    title: "Many More",
    description:
      "There are over 20 different raw materials. Our services team can provide the absolute best material based on your application.",
  },
]
