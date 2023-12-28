import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowRight } from "react-icons/hi"
import {TbBrandGithub, TbBrandLinkedin, TbBrandYoutube,TbBrandInstagram} from "react-icons/tb"
const MOCK_CONTACTS = [
    {
        url: "https://github.com/ArturFPC",
        icon: <TbBrandGithub/>
    },
    {
        url: "https://www.linkedin.com/in/artur-francisco-pereira-carvalho-8b9242215/",
        icon: <TbBrandLinkedin/>
    },
    {
        url: "https://www.youtube.com/channel/UCVX7aAScz_il3LN5Hs27qEw",
        icon: <TbBrandYoutube/>
    },
    {
        url: "https://www.instagram.com/artur_fpc/",
        icon: <TbBrandInstagram/>
    }

]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className='w-full lg:max-w-[530px]'>
                    <p className='font-mono text-teal-500'>Olá, meu nome é</p>
                    <h2 className='text-4xl font-medium mt-2'>Artur Francisco</h2>

                    <p className='text-gray-400 my-6 text-sm sm:text-base'> Sou um programador que está cursando graduação em engenharia de computação
                            no <a href="https://www.bambui.ifmg.edu.br/portal/"> IFMG - campus Bambuí</a>
                    </p>  
                    <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
                        <TechBadge name="C++"/>
                        <TechBadge name="Python"/>
                        <TechBadge name="Next.js"/>
                        <TechBadge name="R"/>
                        <TechBadge name="Pascal"/>
                    </div>
                    <div className='mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row'>
                        <Button className='shadow-button'>
                            Entre em contato
                            <HiArrowRight size={18}/>
                        </Button>
                        <div className='text-2xl text-gray-600 flex items-center h-20 gap-3'>
                            {MOCK_CONTACTS.map((contact,index)=>(
                                <a 
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target='_blank'
                                    className='hover:text-gray-100 transition-colors'
                                >
                                    {contact.icon}
                                </a>

                            ))

                            }
                        </div>
                    </div>
                </div>
                <Image 
                        width={420}
                        height={404}
                        src="/images/profile-pic.jpg"
                        alt="Foto de perfil do Artur Francisco"
                        className='w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover '
                />
            </div>
        </section>
    )

}