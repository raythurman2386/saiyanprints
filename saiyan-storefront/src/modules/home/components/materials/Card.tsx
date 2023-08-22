import Image from "next/image";
import { MaterialCardProps } from "types/global";

const Card: React.FC<MaterialCardProps> = ({ material }) => {
  return (
    <div className="card bg-neutral-content text-slate-900 shadow-sm hover:shadow-xl transition-shadow">
      <figure className="">
        <Image
          height={20}
          width={150}
          src={material.imgUrl}
          alt={material.title}
          className="w-full h-32"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-semibold">{material.title}</h2>
        <p>{material.description}</p>
      </div>
    </div>
  );
};
export default Card;
