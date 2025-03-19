
import { ArrowRight } from "lucide-react";

const brandingData = [
  { title: "STRATEGIC BRANDING" },
  { title: "DIGITAL MARKETING" },
  { title: "CREATIVE DESIGN" },
  { title: "SOCIAL MEDIA" },
  { title: "WEB DEVELOPMENT" }
];

const BrandingComponent = () => {
  return (
    <div className="w-full ">
      {brandingData.map((item, index) => (
        <div key={index} className="w-full group relative ">
          <div className="lg:w-[330px] lg:h-[306px] w-[250px] h-[250px] absolute bg-[#d9d9d9] rounded-[50px] right-1/4 hidden group-hover:block" />

          <div className="opacity-25 flex justify-between items-center group-hover:opacity-100 relative">
            <h4 className="text-[#fefbf6] lg:text-[64px] text-2xl font-extrabold font-['Plus_Jakarta_Sans'] lg:leading-[72px] group-hover:text-white">
              {item.title}
            </h4>

            <div className="w-[72px] h-[72px] rounded-full outline outline-1 outline-offset-[-1px] outline-[#fefbf6] flex justify-center items-center group-hover:outline-white">
              <ArrowRight size={30} className="text-[#fefbf6] group-hover:text-white" />
            </div>
          </div>
          <div className="w-full lg:my-10 my-5 h-px opacity-25 bg-[#fefbf6] group-hover:bg-white" />
        </div>
      ))}
    </div>
  );
};

export default BrandingComponent;
