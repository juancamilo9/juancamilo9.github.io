import Projects from "./Projects"
import { ProyectoItemType } from "../types"

type SectionProjectsTypeProps = {
    proyectos:ProyectoItemType[]
}

const SectionProjects = ({proyectos}:SectionProjectsTypeProps) => {
    
    
    return (
        <div className="max-w-3xl w-full mt-12 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">Proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {proyectos.map(proyecto=>
                    <Projects
                        key={proyecto.id}
                        proyecto={proyecto}
                    />

                )}
                
            </div>
        </div>
    )
}

export default SectionProjects
