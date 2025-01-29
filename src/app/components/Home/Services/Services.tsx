import {Service, servicesData } from "../../../../../Data/data";
import SectionHeading from "../../Helper/SectionHeading";
import ServicesCards from "../../Helper/ServicesCards";

function Services() {
  return (
    <div className="pt-16 pb-16 bg-[#0F0715]">
        <SectionHeading>Services</SectionHeading>
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 lg:gap-7 md:max-w-[1440px] mx-2 md:mx-auto mt-7 md:mt-9 lg:mt-12">
            {servicesData.map((service) => <div key={service.id}>
                    <ServicesCards src={service.icon} alt={service.title} cardTitle={service.title} cardDescription={service.description}/>
                </div>)
            }
        </div>
    </div>
  )
}

export default Services