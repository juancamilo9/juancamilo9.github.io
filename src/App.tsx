import Header from "./components/Header"
import SectionProjects from "./components/SectionProjects"
import SectionContact from "./components/SectionContact"
import SectionWork from "./components/SectionWork"
import SectionSkills from "./components/SectionSkills"

import { infoPersonal,proyectos,experiencia,skill } from "./data/data"



function App() {
  return (
    
      <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <Header
            infoPersonal = {infoPersonal}
        ></Header>

        <SectionWork 
          work={experiencia}/>
        
        <SectionSkills
          skill={skill}
        />

        <SectionProjects
          proyectos={proyectos}
        />
       
       <SectionContact 
        
      />


      </main>
  )
}

export default App
