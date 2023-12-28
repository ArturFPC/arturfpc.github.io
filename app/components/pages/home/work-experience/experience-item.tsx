import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

type ExperienceItemProps ={
    item:{
        name:string
        start:string
        end:string
        src:string
        job:string
        about:string
        techs:string[]
        link:string
        alt:string
    }
}

export const ExperienceItem = ({item}:ExperienceItemProps) => {
    return(
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                        src={item.src}
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt={item.alt}
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800"/>
            </div>
            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href="https://www.linkedin.com/company/realtecsolucaoemgestao/"
                        target="_blank"
                        className="text-gray-500 hover:text-teal-500 transition-colors"
                    > @{item.name}</a>
                    <h4 className="text-gray-300">{item.job}</h4>
                    <span className="text-gray-500">{item.start} ◉ {item.end} ◉ (1 mês)</span>
                    <p className="text-justify text-gray-400">{item.about}</p>
                </div>
                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    {item.techs.map((value,index)=>(
                        <TechBadge key={index} name={value}/>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}