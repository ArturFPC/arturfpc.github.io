import Link from "next/link"
import { ProjectCard } from "./project-card"

export const ProjectsList = () =>{
    return(
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6" >
            <a href="https://github.com/ArturFPC/tyPython">
            <ProjectCard project={{
                name:"TyPython",
                alt:"Thumbnail do Projeto TyPython",
                img:"https://raw.githubusercontent.com/ArturFPC/tyPython/master/logo-TyPython.png",
                text:"Este foi um projeto realizado durante a disciplina de compiladores no oitavo período de graduação do curso de Engenharia de Computação no IFMG campus Bambuí. Realizei esse projeto juntamente com dois colegas Deivison Oliveira Costa e Mickael Osvaldo Oliveira, e por meio deste criamos uma linguagem de programação inspirada no Python, por meio da criação de três analisadores, um léxico, um sintático e um semântico.",
                techs:"Python"
            }}/>
            </a>
            <a href="https://github.com/ArturFPC/nlw-eSports">
            <ProjectCard project={{
                name:"NLW eSports",
                alt:"Thumbnail do Projeto NLW eSports",
                img:"https://raw.githubusercontent.com/ArturFPC/nlw-eSports/main/nlweSports.png",
                text:"Projeto criado durante uma das NLW fornecidas pela empresa RocketSeat, por meio desse projeto pude ter uma maior experiência com desenvolvimento WEB e Mobile, através de experiências com as principais tecnologias que foram demonstradas nesse evento, que no caso foram React, React Native e TypeScript.",
                techs:"React, JavaScript, HTML, CSS"
            }}/>
            </a>
            <a href="https://github.com/ArturFPC/NLW-IA">
            <ProjectCard project={{
                name:"NLW IA",
                alt:"Thumbnail do Projeto NLW IA",
                img:"https://raw.githubusercontent.com/ArturFPC/NLW-IA/main/nlw-ia.jpg",
                text:"Projeto que desenvolvi durante o NLW-IA da Rocketseat, o objetivo inicial do projeto é a criação de uma aplicação web a qual realiza o resumo de Shorts do Youtube através de inteligência artificial, para isso foi utilizado diversas tecnologias, principalmente o Node.js. Foram utilizados dois modelos de IA durante o desenvolvimento, um para gerar um texto a partir do áudio do Shorts e a outra para resumir o texto gerado.",
                techs:"React, Node.js, Inteligência Artificial"
            }}/>
            </a>
            <a href="https://github.com/ArturFPC/Wavelets">
            <ProjectCard project={{
                name:"Wavelets",
                alt:"Thumbnail do Projeto Wavelets",
                img:"https://raw.githubusercontent.com/ArturFPC/Wavelets/main/wavelets.jpg",
                text:"Projeto desenvolvido durante a disciplina processamento digital de imagens no oitavo período do curso de Engenharia de Computação, por meio desse projeto pude aprender diversos conceitos a cerca de Wavelets e também pude programar alguns softwares que fazem uso delas, softwares que são uteis em pré-processamento, compactação de imagens, entre outras coisas.",
                techs:"Python, Wavelets"
            }}/>
            </a>
            <a href="https://github.com/ArturFPC/Beecrowd">
            <ProjectCard project={{
                name:"Beecrowd",
                alt:"Thumbnail do Projeto Beecrowd",
                img:"https://raw.githubusercontent.com/ArturFPC/Beecrowd/main/beecrowd.png",
                text:"Este projeto é um conjunto de resoluções de problemas resolvidos da plataforma Beecrowd, no repositório que inclui as resoluções, estão apenas algumas mais básicas, caso tenha interesse em mais resoluções confira meu perfil no próprio site da Beecrowd.",
                techs:"C++"
            }}/>
            </a>
            <a href="https://github.com/ArturFPC?tab=repositories">
            <ProjectCard project={{
                name:"Grafos",
                alt:"Thumbnail do Projeto Grafos",
                img:"https://raw.githubusercontent.com/ArturFPC/Grafo-Algoritmo-Floyd-Warshall/main/grafos.jpeg",
                text:"Esta seção é dedicada aos algortimos de resolução de grafos que desenvolvi durante a disciplina de Técnicas de Programação no sexto período, inclui os seguintes algoritmos: Djikstra, Prim, Floyd-Warshall e Busca em Largura.",
                techs:"C++"
            }}/>
            </a>
            <a href="https://github.com/ArturFPC/DiskBTree-SerialCurrency">
            <ProjectCard project={{
                name:"Árvore B em disco",
                alt:"Thumbnail do Projeto Árvore B",
                img:"https://raw.githubusercontent.com/ArturFPC/DiskBTree-SerialCurrency/main/arvoreB.jpeg",
                text:"Esta é uma implementação da árvore B projetada para ser usada em um disco, feita utilizando um arquivo tipado, onde os valores inseridos nesta estrutura devem ser do tipo serialCurrency. O código é escrito em C++ e inclui documentação detalhada e comentários para auxiliar na compreensão e implementação.",
                techs:"C++"
            }}/>
            </a>
            <a href="https://github.com/ArturFPC/Socket-HTTP-Multithreaded">
            <ProjectCard project={{
                name:"Socket HTTP Multithread",
                alt:"Thumbnail do Projeto Socket",
                img:"https://raw.githubusercontent.com/ArturFPC/Socket-HTTP-Multithreaded/main/socket.jpeg",
                text:"Implementação de um servidor web multithreaded, capaz de responder solicitações de um navegador web. A utilização deste é baseada na execução do socket no desktop, e fazer uma requisição HTTP pelo navegador no endereço do computador na porta 3000.",
                techs:"C++"
            }}/>
            </a>
            <a href="https://github.com/ArturFPC/SnakeGame">
            <ProjectCard project={{
                name:"Snake Game",
                alt:"Thumbnail do Snake Game",
                img:"https://raw.githubusercontent.com/ArturFPC/SnakeGame/main/snakegame.jpeg",
                text:"Jogo desenvolvido em java durante a disciplina de programação orientada a objetos, o objetivo da criação desse jogo foi absorver o conteúdo da disciplina e poder praticar as habilidades de programação.",
                techs:"Java"
            }}/>
            </a>
        </section>
    )
}