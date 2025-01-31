
type Props = {
    children: React.ReactNode;
}

function SectionHeading({children}: Props) {
  return (
    <h1 className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6 rounded">{children}</h1>
  )
}

export default SectionHeading