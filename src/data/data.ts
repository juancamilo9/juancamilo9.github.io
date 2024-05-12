import { ProyectoItemType, InfoPersonalType, InfoWorkType, SkillsType } from "../types"


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
        imagen: "../../public/img/google.png",
        nombre: "Clon de Google",
        descripcion: "Replica de páigna Google.com",
        url: "https://clon-google-sigma.vercel.app/"
    },
    {
        id: 2,
        imagen: "../../public/img/dojoTime.png",
        nombre: "Time Dojo",
        descripcion: "Página estática sobre el tiempo en algunas ciudades",
        url: "https://time-dojo-prueba.vercel.app/"
    },
    {
        id: 3,
        imagen: "../../public/img/landingpage.png",
        nombre: "Landing page con resposive",
        descripcion: "Landigpage desarrollada con Bootstrap y HTML",
        url: "https://landin-page-bootstarp5.vercel.app/?name=asa&profesion=asas&email=colombiana01%40distrisgc.com#contact"
    },
    {
        id: 4,
        imagen: "../../public/img/consumoPropina.png",
        nombre: "Consumo restaurante",
        descripcion: "Calcula el valor de un pedido y su propina",
        url: "https://consumo-restaurante.netlify.app/"
    },
    {
        id: 5,
        imagen: "../../public/img/controlCitas.png",
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
    },
    {
        id: 2,
        empresa: "Escobar S.A",
        rol: "Islero",
        tiempo: "2022-2023"
    },
    {
        id: 3,
        empresa: "Baluarte C.T.A",
        rol: "Guarda de seguridad",
        tiempo: "2019-2022"
    }
]

export const skill: SkillsType[] = [
    {
        id: 1,
        nombre: "React",
        logo: "../../public/img/react.svg"
    },
    {
        id: 2,
        nombre: "TypeScript",
        logo: "../../public/img/typescript.svg"
    },
    {
        id: 3,
        nombre: "JavaScript",
        logo: "../../public/img/javascript.svg"
    },
    {
        id: 4,
        nombre: "HTML",
        logo: "../../public/img/html5.svg"
    },
    {
        id: 5,
        nombre: "CSS",
        logo: "../../public/img/css.svg"
    },
    {
        id: 6,
        nombre: "Bootstrap",
        logo: "../../public/img/bootstrap.svg"
    },

]


