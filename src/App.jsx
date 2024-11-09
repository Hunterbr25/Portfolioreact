import imagemDev from ""

function App() {
  
  return (
    <main>
      <section>
      <p>
        Olá Seja bem-vindo(a) ao meu portfólio.
      </p>

      <p>
        Meu nome é <span>Tiago</span> e eu sou um desenvolvedor web
      </p>

      <div id="redes-sociais">
      <a href="#">
      <img src={iconegithub} alt="" srcset=""/>
      </a>
      <a href="#">
      <img src={iconeLinkedin} alt="" srcset=""/>
      </a>
      </div>
      <a href="#sobreMim">
        <button>Conheça mais sobre mim</button>
      </a>
      </section>

      <section>
        <img id="imagemDev" src={imagemDev}/>
      </section>
    </main>
  )
}

export default App

