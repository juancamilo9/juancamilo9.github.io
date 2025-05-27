
import { SkillsType } from "../types"

type SkillTypeProps = {
    skill: SkillsType
}

const Skill = ({ skill }: SkillTypeProps) => {

    const { nombre, logo } = skill

    return (
        <div className="bg-slate-500 rounded-lg overflow-hidden shadow-2xl">

            <div className="p-4 space-y-2 items-center flex justify-center flex-col">
                <img
                    src={logo}
                    alt={nombre}
                    className="w-20 items-center"
                />
                <h3 className="text-lg font-semibold text-white text-center">{nombre}</h3>
            </div>
        </div>
    )
}

export default Skill
