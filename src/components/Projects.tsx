import { ProyectoItemType } from "../types"
type ProjectsTpeProps = {
    proyecto: ProyectoItemType
}

const Projects = ({proyecto}:ProjectsTpeProps) => {
    
    const {nombre,descripcion,imagen,url} = proyecto
    
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-2xl">
            <img
                src={imagen}
                alt="Project 1"
                width="400"
                height="225"
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{nombre}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    {descripcion}
                </p>
                <a className="text-gray-600 dark:text-gray-400" href={url}>
                    Demo
                </a>
            </div>
        </div>
    )
}

export default Projects
