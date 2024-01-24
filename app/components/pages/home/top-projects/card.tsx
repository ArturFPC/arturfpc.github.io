import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type CardProps = {
    project : {
        name : string
        src : string
        text : string
        alt : string
        link : string
        techs : string[]
    } 
}

export const Card = ({project}:CardProps) => {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row ">
            <div className="w-full h-full">
                <Image 
                    width={420}
                    height={304}
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg max-w-none"
                />
            </div>
            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image 
                        width={20}
                        height={20}
                        src={"/images/icons/project-title-icon.svg"}
                        alt=""
                    />
                    {project.name}
                </h3>
                <p className="text-gray-400 my-6">
                    {project.text}
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {project.techs.map((item,index) => (
                        <TechBadge key={index} name={item}/>
                    ))}
                </div>
                <Link className="flex" href={project.link}>
                    Ver projeto <HiArrowNarrowRight/>
                </Link>
            </div>
        </div>
    )
}