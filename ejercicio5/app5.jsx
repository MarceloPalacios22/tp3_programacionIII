const { useState } = React;

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState(null);

  const calcular = (e) => {
    e.preventDefault();
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Ingrese números válidos");
      return;
    }

    let resOperacion = 0;
switch (operacion) {
      case "suma":
        resOperacion = n1 + n2;
        break;
      case "resta":
        resOperacion = n1 - n2;
        break;
      case "multiplicacion":
        resOperacion = n1 * n2;
        break;
      case "division":
        resOperacion = n2 !== 0 ? n1 / n2 : "Division por cero... ERROR";
        break;
      default:
        resOperacion = "Operación no válida";
    }

    setResultado(resOperacion);
  };

  const deshabilitarBoton =
    operacion === "division" && parseFloat(numero2) === 0;

  return (
    <div>
        <form onSubmit={calcular}>
        <label htmlFor="numero1">PRIMER NUMERO: </label>
        <input
          type="number"
          name="numero1"
          id="numero1"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />{" "}
        <br />
        <br />
        <label htmlFor="numero2">SEGUNDO NUMERO: </label>
        <input
          type="number"
          name="numero2"
          id="numero2"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
        <br />
        <br />
        <label>OPERACIONES: </label>
        <select
          value={operacion}
          onChange={(e) => setOperacion(e.target.value)}
        >
          <option value="suma">SUMA</option>
          <option value="resta">RESTA</option>
          <option value="multiplicacion">MULTIPLICACION</option>
          <option value="division">DIVISION</option>
        </select>
        <br />
        <br />
        <button onClick={calcular} disabled={deshabilitarBoton}>
          CALCULAR
        </button>
        <br />
        <br />
      </form>

      {resultado !== null && <h3>RESULTADO: {resultado}</h3>}
      {deshabilitarBoton && <p>No se puede dividir por 0</p>}
    </div>
  );
}