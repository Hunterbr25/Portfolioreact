import "./Sobre.css"

export const Sobre = ({categoria}) => {
    return(
        <div id={categoria}>
        <div id="resumo">
            <h2>Sobre mim</h2>

            <p>
            Meu Nome dolor sit amet consectetur adipisicing elit. Praesentium earum nulla doloremque facere delectus enim quaerat vitae? Suscipit dolores ipsam ad sed adipisci expedita, ducimus placeat 
            deserunt. Ipsum, iusto officia. <br></br>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam expedita molestias, 
            cum deserunt ex, pariatur odio maxime voluptate doloribus nulla magni aliquam. 
            Ratione eligendi error aliquid. Quis vel tempore rem?
            </p>
        </div>
        <div id="meus-conhecimentos">
            <h2>Meus conhecimentos</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACTJS</li>
            </ul>
        </div>

        </div>
    

    )
}