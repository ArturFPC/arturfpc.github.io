import { SectionTitle } from "@/app/components/section-title"
import { HorizontalSplitter } from "@/app/components/splitter/horizontal"
import { Card } from "./card"
import { Link } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const TopProjects = () => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="Destaques" title="Projetos em destaque" />
            <HorizontalSplitter className="mb-16"/>
            <div>
                <Card 
                    project={
                        {name : "TyPython",
                        src : "https://drive.google.com/uc?id=1sVETj5kTTznqoZAvZ-yRXQH57KYfPh6L",
                        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolor officiis exercitationem voluptatibus delectus hic, placeat debitis quibusdam illum aliquid asperiores saepe ad consequuntur itaque vel cupiditate unde facilis nihil? Consectetur illum magni, consequuntur nisi sed illo quos vitae molestiae animi saepe, maiores, eaque dolorum distinctio qui et fugit excepturi!",
                        alt : "Thumbnail do projeto TyPython",
                        link : "https://github.com/ArturFPC/tyPython",
                        techs:["Python"]}
                    }
                />
                <HorizontalSplitter className="my-16" />
                <Card
                    project={
                        {name: "NLW eSports",
                        src: "https://drive.google.com/uc?id=1Iy6IV0yxv_kgTvDAMeVGphgjB-3zTZky",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolor officiis exercitationem voluptatibus delectus hic, placeat debitis quibusdam illum aliquid asperiores saepe ad consequuntur itaque vel cupiditate unde facilis nihil? Consectetur illum magni, consequuntur nisi sed illo quos vitae molestiae animi saepe, maiores, eaque dolorum distinctio qui et fugit excepturi!",
                        alt: "Thumbnail do projeto NLW eSports",
                        link: "https://github.com/ArturFPC/nlw-eSports",
                        techs: ["React", "TypeScript"]}
                    }
                />
                <HorizontalSplitter className="my-16"/>
                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">Se interessou?</span>
                    <Link href="/projects" className="inline-flex">
                        Ver todos
                        <HiArrowNarrowRight/>
                    </Link>
                </p>
            </div>
            
        </section>
    )
}