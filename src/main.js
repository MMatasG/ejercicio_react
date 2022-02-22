

function Main() {
  let nombres = ["Pepe", "Paco", "Jose", "Manuel"]
  let nombres_para_añadir = ["Juan", "José", "Miguel", "Antonio"]

  return (
    <div id="main">
      <p>Componente main</p>
        <ul>
        {nombres.map(nombre => <li>{nombre}</li>)}
      </ul>
      <button onClick={anadir_nombre(nombres_para_añadir, nombres)}> Añadir nombre a la lista </button>

      <button>Cambiar titulo de cabecera </button>

   </div>

  );
}

function anadir_nombre(lista2, lista) {

  let nombre = '';

  lista2.pop = nombre;
  lista.push(nombre);

}

export default Main;
