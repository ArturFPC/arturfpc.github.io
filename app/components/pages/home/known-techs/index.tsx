import { SectionTitle } from "@/app/components/section-title"
import { TbBrandReact, TbBrandCpp, TbBrandCss3, TbBrandNextjs, TbBrandPython, TbHtml, TbAssembly, TbBrandReactNative, TbBrandFlutter, TbBrandMysql, TbSql} from "react-icons/tb"
import { FaCuttlefish, FaRProject } from "react-icons/fa"
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
                    icon: <FaRProject/>,
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
                <KnownTech tech={{
                    icon: <FaCuttlefish/>,
                    name: 'C',
                    startDate: '2020-02-01'
                }}/>
                <KnownTech tech={{
                    icon: <TbAssembly/>,
                    name: 'Assembly',
                    startDate: '2023-03-10'
                }}/>
                <KnownTech tech={{
                    icon: <TbBrandReact/>,
                    name: 'React',
                    startDate: '2022-09-10'
                }}/>
                <KnownTech tech={{
                    icon: <TbBrandReactNative/>,
                    name: 'React Native',
                    startDate: '2022-09-10'
                }}/>
                <KnownTech tech={{
                    icon: <TbBrandFlutter/>,
                    name: 'Flutter',
                    startDate: '2023-10-28'
                }}/>
                <KnownTech tech={{
                    icon: <TbSql/>,
                    name: 'SQL',
                    startDate: '2018-05-10'
                }}/>
            </div>
        </section>
    )
}