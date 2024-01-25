import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6 text-justify">
          Estudante prestes a concluir a graduação em Engenharia de Computação,
          apresento habilidades sólidas em programação, com destaque em Python,
          C++ e na área de desenvolvimento web. Comecei minha tragetória como
          programador durante o curso técnico informática integrado ao ensino
          médio e logo tomei gosto pela área. Durante a minha graduação pude
          aprimorar minhas habilidades na área de desenvolvimento tanto dentro
          quanto fora da faculdade. Busco uma oportunidades no mercado de
          trabalho para aplicar meu conhecimento e crescer profissionalmente.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem
          item={{
            name: 'Realtec',
            start: 'jul 2018',
            end: 'jul 2018',
            src: 'https://drive.google.com/uc?id=1cPV5MZFK7xXgvxpsH0gxeGNW_7wAfqYp',
            job: 'Estigiário na equipe de desenvolvimento',
            about:
              'Durante o estágio foi desenvolvido um projeto paralelo ao da equipe de desenvolvimento, com base nos sistemas feitos pela empresa. Para o desenvolvimento deste projeto foram utilizadas as ferramentas Delphi, MySQL e Firebird.',
            techs: ['Pascal', 'MySQL'],
            link: 'https://www.linkedin.com/company/realtecsolucaoemgestao/',
            alt: 'Logo da empresa Realtec Soluções em Gestão',
          }}
        />
        <ExperienceItem
          item={{
            name: 'IFMG - Reitoria',
            start: 'jan 2019',
            end: 'fev 2019',
            src: 'https://drive.google.com/uc?id=1u5HMdLTOBEytD4cj3i3L1EgwNU7SCnc2',
            job: 'Estigiário na equipe de suporte e manutenção',
            about:
              'Atuação no setor de suporte e manutenção, dentro das diversas atividades pertinentes à manutenção de computadores vinculados aos servidores do IFMG, Reitoria.',
            techs: ['Manutenção de computadores'],
            link: 'https://www.linkedin.com/school/ifmgnarede/',
            alt: 'Logo da empresa Realtec Soluções em Gestão',
          }}
        />
      </div>
    </section>
  )
}
