import {bancos as bancos2} from './assets/bancos';

function Lab1() {
    
    const bancos = bancos2.map((bancos) => {
        return (
            <li key={bancos.id}>{bancos.name}</li>
        )
    })

    const Persona = {
        nombre: "Angel",
        edad: 20,
        ciudad: "Tampico",
        trabajo: "Practicante de Digitalizacion Fiscal en Arca Continental",
    }


  return (
    <div>
      <h1>Hola Mundo</h1>
      <p>Nombre: {Persona.nombre}</p>
      <p>Edad: {Persona.edad}</p>
      <p>Ciudad: {Persona.ciudad}</p>
      <p>Trabajo: {Persona.trabajo}</p>
        <h2>Lista de Bancos</h2>
        <ul>
            {bancos}
        </ul>
    </div>
  )
}

export default Lab1



