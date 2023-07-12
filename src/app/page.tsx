import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </div>
      <div>
        <h1>
          Hi, i am Renato!
        </h1>
        <h2>
          Estudante de desenvolvimento de software e cloud
        </h2>
      </div>
      <div className="experience">
        <h3>
          Expirience
        </h3>
        <p>
          Texto
        </p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸 EN - Avançado</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>
              🎓
            </span>
            <span>
              Universidade
            </span>
          </div>
          
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>
            contact me
          </button>

        </div>


      </div>
    </main>
  )
}
