const endPoint = "https://jsonplaceholder.typicode.com/todos";
const lista = document.getElementById("listado");

const resultado = async () => {
  const respuesta = await fetch(endPoint);

  if (!respuesta.ok) {
    document.body.innerHTML += "<p>Error al obtener los datos</p>";
    return;
  }

  const data = await respuesta.json();

  const tareasCompletadas = data.filter((todo) => todo.completed);

  tareasCompletadas.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.title;
    lista.appendChild(li);
  });
};

resultado();