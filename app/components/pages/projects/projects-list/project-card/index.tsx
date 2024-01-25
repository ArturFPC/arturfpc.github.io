import Image from 'next/image'

type ProjectCardProps = {
  project: {
    name: string
    text: string
    img: string
    alt: string
    techs: string
  }
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-teal-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src={project.img}
          alt={project.alt}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all "
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 hover:group-hover:text-teal-500 transition-all">
          {project.name}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">{project.text}</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {project.techs}
        </span>
      </div>
    </div>
  )
}
