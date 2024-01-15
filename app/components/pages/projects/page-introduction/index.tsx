
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
    return(
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
            <div className="bg-sky-950 px-12 py-8 rounded-2xl">
                <SectionTitle title="Meus Projetos" subtitle="projetos" className="text-center items-center [&>h3]:text-4xl"/>
                <div className="flex flex-col items-center">
                    <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base ">Nesta página você poderá ver alguns dos principais projetos que desenvolvi ao longo da faculdade e curso técnico. Sinta-se a vontade para explorar os projetos que estão sendo mostrados abaixo. Caso tenha interesse em ver outros projetos desenvolvidos por mim, acesse meu <a className="text-teal-500" href="https://github.com/ArturFPC">GitHub</a>.</p>
                    <Link href="/" className="shadow-button flex flex-row items-center bg-teal-600 py-3 px-4 rounded-lg text-gray-50 justify-center gap-2 hover:bg-teal-500 transition-all disabled:opacity-50 hover:text-gray-50">
                        <HiArrowNarrowLeft size={20}/>
                        Voltar para Home
                    </Link>
                </div>
            </div>
        </section>
    )
}