const { useState } = React;

function App() {
  const [botonIzquierdo, setBotonIzquierdo] = useState(true);

  const handleBotonIzquierdo = () => {
    setBotonIzquierdo(false);
  };

  const handleBotonDerecho = () => {
    setBotonIzquierdo(true);
  };

  return (
    <div>
      <button onClick={handleBotonIzquierdo} disabled={!botonIzquierdo}>
        Izquierdo
      </button>
      <button onClick={handleBotonDerecho} disabled={botonIzquierdo}>
        Derecho
      </button>
    </div>
  );
}