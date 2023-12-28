import { SectionTitle } from "@/app/components/section-title"
import { TbAntennaBars1, TbBrandCpp, TbBrandCss3, TbBrandNextjs, TbBrandPython, TbHtml } from "react-icons/tb"
import { KnownTech } from "./known-tech"
export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="Competências" title="Conhecimentos"/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                <KnownTech tech = {{
                    icon: <TbBrandCpp/>,
                    name: 'C++',
                    startDate: '2020-02-15'
                }}/>
                <KnownTech tech = {{
                    icon: <TbBrandPython/>,
                    name: 'Python',
                    startDate: '2019-01-10'
                }}/>
                <KnownTech tech = {{
                    icon: <TbAntennaBars1/>,
                    name: 'R',
                    startDate: '2023-02-15'
                }}/>
                <KnownTech tech = {{
                    icon: <TbHtml/>,
                    name: 'HTML',
                    startDate: '2013-03-15'
                }}/>
                <KnownTech tech = {{
                    icon: <TbBrandCss3/>,
                    name: 'CSS',
                    startDate: '2013-03-15'
                }}/>
                <KnownTech tech={{
                    icon: <TbBrandNextjs/>,
                    name: 'Next.js',
                    startDate: '2023-12-10'
                }}/>
            </div>
        </section>
    )
}