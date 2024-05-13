import { ProyectoItemType, InfoPersonalType, InfoWorkType, SkillsType } from "../types"
import clonGoogle from '../assets/img/google.png'
import consumoPropina from '../assets/img/consumoPropina.png'
import dojoTime from '../assets/img/dojoTime.png'
import landingPage from '../assets/img/landingpage.png' 
import controlCitas from '../assets/img/controlCitas.png'
import react_svg from '../assets/img/react.svg'
import typescript_svg from '../assets/img/typescript.svg'
import html_svg from '../assets/img/html5.svg'
import css_svg from '../assets/img/css.svg'
import javascript_svg from '../assets/img/javascript.svg'
import git_svg from '../assets/img/git.svg'

export const infoPersonal: InfoPersonalType = {
    nombre: "Juan Camilo",
    apellido: "Duque Gil",
    rol: "Desarrollador Web Junior",
    github: "https://github.com/juancamilo9",
    linkedin: "https://www.linkedin.com/in/juan-camilo-duque-gil/",
    email: "kcamilito@gmail.com",
    movil: "+573134457889"

}

export const proyectos: ProyectoItemType[] = [
    {
        id: 1,
        imagen: clonGoogle,
        nombre: "Clon de Google",
        descripcion: "Replica de páigna Google.com",
        url: "https://clon-google-sigma.vercel.app/"
    },
    {
        id: 2,
        imagen: dojoTime,
        nombre: "Time Dojo",
        descripcion: "Página estática sobre el tiempo en algunas ciudades",
        url: "https://time-dojo-prueba.vercel.app/"
    },
    {
        id: 3,
        imagen: landingPage,
        nombre: "Landing page con resposive",
        descripcion: "Landigpage desarrollada con Bootstrap y HTML",
        url: "https://landin-page-bootstarp5.vercel.app/?name=asa&profesion=asas&email=colombiana01%40distrisgc.com#contact"
    },
    {
        id: 4,
        imagen:consumoPropina,
        nombre: "Consumo restaurante",
        descripcion: "Calcula el valor de un pedido y su propina",
        url: "https://consumo-restaurante.netlify.app/"
    },
    {
        id: 5,
        imagen: controlCitas,
        nombre: "Control de citas",
        descripcion: "Lleva el control de un consultorio veterinario",
        url: "https://cheery-malasada-ff6fea.netlify.app/"
    }
]

export const experiencia: InfoWorkType[] = [
    {
        id: 1,
        empresa: "Geovictoria Colombia S.A.S",
        rol: "Analista Funcional",
        tiempo: "2023-Actualmente"
    }
    // {
    //     id: 2,
    //     empresa: "Escobar S.A",
    //     rol: "Islero",
    //     tiempo: "2022-2023"
    // },
    // {
    //     id: 3,
    //     empresa: "Baluarte C.T.A",
    //     rol: "Guarda de seguridad",
    //     tiempo: "2019-2022"
    // }
]

export const skill: SkillsType[] = [
    {
        id: 1,
        nombre: "React",
        logo: react_svg
    },
    {
        id: 2,
        nombre: "TypeScript",
        logo: typescript_svg
    },
    {
        id: 3,
        nombre: "JavaScript",
        logo: javascript_svg
    },
    {
        id: 4,
        nombre: "HTML",
        logo: html_svg
    },
    {
        id: 5,
        nombre: "CSS",
        logo: css_svg
    },
    {
        id: 6,
        nombre: "GitHub",
        logo: git_svg
    },

]


