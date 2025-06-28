const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0 || pesoNum <= 0) {
      setMensaje("Ingrese valores válidos");
      setColor("negro");
      setImc(null);
      return;
    }

    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado);

    if (imcCalculado < 18.5) {
      setMensaje("Nivel bajo de peso");
      setColor("amarillo");
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setMensaje("Nivel normal");
      setColor("verde");
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setMensaje("Nivel de sobrepeso");
      setColor("naranja");
    } else if (imcCalculado >= 30) {
      setMensaje("Nivel de obesidad");
      setColor("rojo");
    }
  };

  return (
    <div className="contenedor">
      <form onSubmit={calcularIMC}></form>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Ingrese peso en kg"
      />
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Ingrese altura en metros"
      />
      <br />
      <button onClick={calcularIMC}>Calcular IMC</button>
      <br />
      <br />
      {imc && (
        <div>
          <h3>Su IMC es: {imc}</h3>
          <p className={color}>{mensaje}</p>
        </div>
      )}
    </div>
  );
}