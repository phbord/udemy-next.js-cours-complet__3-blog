import Link from 'next/link'

export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur Code.io</h1>
      <span>Le blog communautaire des aficionados</span>
      <div className="row mt-5">
        <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">Maximisez votre culture web</h6>
              <p className="card-text">Chaque auteur tente de vous apporter le plus de valeur possible par article.</p>
              <Link href="/blog">
                <a>Visitez le blog</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6" style={{minHeight: "200px"}}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Faites un tour vers la liste de membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">Rencontrez des devs</h6>
              <p className="card-text">Ajoutez, invitez et discutez avec les différents membres.</p>
              <Link href="/utilistateurs">
                <a>Découvrez la liste de membres</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
