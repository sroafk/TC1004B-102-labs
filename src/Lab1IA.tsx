import {bancos as bancoIA} from "./assets/bancos";

function HolaMundo() {
  return <h1>¡Hola Mundo!</h1>;
}

function DatosUsuario() {
  const nombre = "Juan";
  const edad = 20;

  return (
    <div>
      <h2>Segundo componente</h2>
      <p>Mi nombre es: {nombre}</p>
      <p>Mi edad es: {edad} años</p>
    </div>
  );
}

function DatosBanco() {
  return (
    <div>
      <h2>Tercer componente</h2>
      <p>Nombre del banco: {bancoIA[0]?.name ?? 'Desconocido'}</p>
      <p>País: {bancoIA[0]?.country ?? 'Desconocido'}</p>
    </div>
  );
}

function Lab1IA() {
  return (
    <div>
      <HolaMundo />
      <DatosUsuario />
      <DatosBanco />
    </div>
  );
}

export default Lab1IA;