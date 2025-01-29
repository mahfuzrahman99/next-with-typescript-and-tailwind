import Image from "next/image";

export interface ServicesCardsProps {
  src: string;
  alt: string;
  cardTitle: string;
  cardDescription: string;
}

function ServicesCards({ src, alt, cardTitle, cardDescription }: ServicesCardsProps) {
  return (
    <div
      className="shadow-2xl p-6 rounded-lg bg-[#814ced] transition-transform duration-400 mx-2 md:mx-auto"
      style={{
        willChange: "transform",
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {/* Icon */}
      <div>
        <Image src={src} alt={alt} width={50} height={50} layout="intrinsic" />
      </div>

      {/* Card Title */}
      <h1 className="mt-4 text-lg font-bold text-gray-100">{cardTitle}</h1>

      {/* Card Description */}
      <p className="mt-3 text-sm text-white text-opacity-80">{cardDescription}</p>
    </div>
  );
}

export default ServicesCards;
