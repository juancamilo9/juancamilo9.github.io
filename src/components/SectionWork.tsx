import { InfoWorkType } from "../types"
import WorkItem from "./WorkItem"

type SectionWorkTypeProps = {
    work:InfoWorkType[]
}

const SectionWork = ({work}:SectionWorkTypeProps) => {
  return (
    <section className="max-w-3xl w-full mt-12 space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">Experiencia laboral</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                work.map(work=>
                  <WorkItem
                      key={work.id}
                      work={work}
                  />

              )}
              
            </div>
        </section>
  )
}

export default SectionWork
