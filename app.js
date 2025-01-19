// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById('amigo').value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return; // Salir de la función si el nombre está vacío
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Añadir el evento al botón
document.getElementById('agregarBoton').addEventListener('click', agregarAmigo);


// Función para mostrar amigos en la lista
function mostrarAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = amigos[i]; // Asignar el nombre del amigo

        // Agregar el elemento de lista a la lista
        lista.appendChild(li);
    }
}

// Llamar a la función para mostrar los amigos
mostrarAmigos();

  // Función para sortear un amigo aleatorio
  function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = 'No hay amigos disponibles.';
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}