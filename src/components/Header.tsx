import { InfoPersonalType } from "../types"
import gmail_svg from '../assets/img/gmail.svg'
import github_svg from '../assets/img/github.svg'
import linkedin_svg from '../assets/img/linkedin.svg'
import wsp_svg from '../assets/img/whatsapp.svg'

type inforPersonalTypeProps = {
  infoPersonal: InfoPersonalType
}

const Header = ({ infoPersonal }: inforPersonalTypeProps) => {

  const { nombre, apellido, rol, linkedin, github } = infoPersonal

  return (
    <header className="max-w-3xl w-full space-y-4 text-center">
      <div className="inline-block rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-700  dark:text-gray-300">
        Portafolio Web
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">{nombre}{' '}<span className="text-green-500">{apellido}</span></h1>
      <p className="text-xl text-indigo-400">
        {rol}
      </p>

      <div className="flex justify-around">
        <a href={linkedin} target="_blank">
          <img className="social-red" src={linkedin_svg} alt="imagen linkedin" />
        </a>
        <a href={github} target="_blank">
          <img className="social-red git" src={github_svg} alt="imagen github" />
        </a>
        <a href="#sendmessage">
          <img className="social-red" src={gmail_svg} alt="imagen gmail" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=573134457889" target="_blank">
          <img className="social-red" src={wsp_svg} alt="imagen whatapp" />
        </a>
      </div>
    </header>
  )
}

export default Header
