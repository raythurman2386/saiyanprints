import Gift from "@modules/common/icons/gift";
import { ServiceCardProps } from "types/global";

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="card xs:w-48 sm:w-72 md:w-84 lg:w-96 bg-neutral-content text-slate-900 shadow-sm hover:shadow-xl transition-shadow">
      <figure className="mt-8 p-8 bg-slate-600 w-40 h-40 m-auto rounded-full">
        {service.icon}
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-semibold">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
