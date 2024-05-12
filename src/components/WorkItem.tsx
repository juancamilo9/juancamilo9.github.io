import { InfoWorkType } from "../types"

type WorkItemTypeProps = {
    work: InfoWorkType
}

const WorkItem = ({ work }: WorkItemTypeProps) => {
    const { empresa, rol, tiempo } = work
    return (
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-2xl">

            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{rol}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    {empresa}
                </p>
                <p className="text-gray-600 dark:text-gray-400" >{tiempo}</p>
            </div>
        </div>
    )
}

export default WorkItem
