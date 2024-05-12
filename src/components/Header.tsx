import { InfoPersonalType } from "../types"

type inforPersonalTypeProps = {
  infoPersonal: InfoPersonalType
}

const Header = ({ infoPersonal }: inforPersonalTypeProps) => {

  const { nombre, apellido, rol, linkedin, github } = infoPersonal

  return (
    <header className="max-w-3xl w-full space-y-4 text-center">
      <div className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        Portafolio Web
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">{nombre}{' '}<span className="text-green-500">{apellido}</span></h1>
      <p className="text-xl text-gray-600 dark:text-indigo-400">
        {rol}
      </p>

      <div className="flex justify-around">
        <a href={linkedin} target="_blank">
          <img className="social-red" src="../../public/img/linkedin.svg" alt="" />
        </a>
        <a href={github} target="_blank">
          <img className="social-red git" src="../../public/img/github.svg" alt="" />
        </a>
        <a href="#sendmessage">
          <img className="social-red" src="../../public/img/gmail.svg" alt="" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=573134457889" target="_blank">
          <img className="social-red" src="../../public/img/whatsapp.svg" alt="" />
        </a>
      </div>
    </header>
  )
}

export default Header
