import Image from "next/image"
import Link from "next/link"

interface ProjectsCardProps {
    src: string;
    url: string;
}

function ProjectsCard({ src, url }: ProjectsCardProps) {
  return (
    <Link target="blank" href={url} className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 aos-init aos-animate flex justify-center items-center mx-2 md:mx-auto">
        <Image src={src} alt={"Project Image"} width={300} height={200} />
    </Link>
  )
}

export default ProjectsCard