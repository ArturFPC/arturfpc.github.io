import { SectionTitle } from '@/app/components/section-title'
import { HorizontalSplitter } from '@/app/components/splitter/horizontal'
import { Card } from './card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const TopProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Projetos em destaque" />
      <HorizontalSplitter className="mb-16" />
      <div>
        <Card
          project={{
            name: 'TyPython',
            src: 'https://drive.google.com/uc?id=1sVETj5kTTznqoZAvZ-yRXQH57KYfPh6L',
            text: 'Este foi um projeto realizado durante a disciplina de compiladores no oitavo período de graduação do curso de Engenharia de Computação no IFMG campus Bambuí. Realizei esse projeto juntamente com dois colegas Deivison Oliveira Costa e Mickael Osvaldo Oliveira, e por meio deste criamos uma linguagem de programação inspirada no Python, por meio da criação de três analisadores, um léxico, um sintático e um semântico.',
            alt: 'Thumbnail do projeto TyPython',
            link: 'https://github.com/ArturFPC/tyPython',
            techs: ['Python'],
          }}
        />
        <HorizontalSplitter className="my-16" />
        <Card
          project={{
            name: 'NLW eSports',
            src: 'https://drive.google.com/uc?id=1Iy6IV0yxv_kgTvDAMeVGphgjB-3zTZky',
            text: 'Projeto criado durante uma das NLW fornecidas pela empresa RocketSeat, por meio desse projeto pude ter uma maior experiência com desenvolvimento WEB e Mobile, através de experiências com as principais tecnologias que foram demonstradas nesse evento, que no caso foram React, React Native e TypeScript.',
            alt: 'Thumbnail do projeto NLW eSports',
            link: 'https://github.com/ArturFPC/nlw-eSports',
            techs: ['React', 'TypeScript'],
          }}
        />
        <HorizontalSplitter className="my-16" />
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
