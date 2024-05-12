
import { SkillsType } from "../types"

type SkillTypeProps = {
    skill: SkillsType
}

const Skill = ({ skill }: SkillTypeProps) => {

    const { nombre, logo } = skill

    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-2xl">

            <div className="p-4 space-y-2">
                <img
                    src={logo}
                    alt="Project 1"
                    width="400"
                    height="225"
                    className="w-full h-48 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{nombre}</h3>
            </div>
        </div>
    )
}

export default Skill
