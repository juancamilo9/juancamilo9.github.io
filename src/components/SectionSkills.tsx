import { SkillsType } from "../types"
import Skill from "./Skill"

type SectionSkillTypeProps = {
    skill: SkillsType[]
}


const SectionSkills = ({skill}:SectionSkillTypeProps) => {
  return (
    <section className="max-w-3xl w-full mt-12 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight dark:text-gray-100">Habilidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skill.map(skill=>
                    <Skill
                        key={skill.id}
                        skill={skill}
                    />

                )}
                
            </div>
        </section>
  )
}

export default SectionSkills
