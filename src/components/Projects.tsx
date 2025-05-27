import { ProyectoItemType } from "../types"
type ProjectsTpeProps = {
    proyecto: ProyectoItemType
}

const Projects = ({proyecto}:ProjectsTpeProps) => {
    
    const {nombre,descripcion,imagen,url} = proyecto
    
    return (
        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-2xl">
            <img
                src={imagen}
                alt={nombre}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-white">{nombre}</h3>
                <p className="text-white">
                    {descripcion}
                </p>
                <a className="text-indigo-600 underline" href={url}>
                    Demo
                </a>
            </div>
        </div>
    )
}

export default Projects
