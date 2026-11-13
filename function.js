    let tareas = [];
    let editandoId = null;

  
function renderizarTabla() {
      const tabla = document.getElementById("tablaTareas");
      tabla.innerHTML = "";

      tareas.forEach((tarea) => {
        const fila = `
          <tr>
            <td class='td-reg'>${tarea.id}</td>
            <td class="td-reg ${tarea.hecha ? 'hecho' : ''}">${tarea.texto}</td>
            <td class= 'td-reg'>${tarea.hecha ? '✔️ Hecha' : 'Pendiente'}</td>
            <td>
            <button class="btn-hecho" onclick="marcarHecha(${tarea.id})">Hecha</button>  
            <button class="btn-editar" onclick="editarTarea(${tarea.id})">Modificar</button>
            <button class="btn-eliminar" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
            </td>
          </tr>
        `;
        tabla.innerHTML += fila;
      });
    }

    function agregarTarea() {
      const input = document.getElementById("tareaInput");
      const texto = input.value.trim();

      if (texto === "") {
        alert("Escribe una tarea");
        return;
      }

      if (editandoId !== null) {
        const tarea = tareas.find(t => t.id === editandoId);
        tarea.texto = texto;
        editandoId = null;
      } else {
        tareas.push({
          id: Date.now(),
          texto: texto,
          hecha: false
        });
      }

      input.value = "";
      renderizarTabla();
    }


    function editarTarea(id) {
      const tarea = tareas.find(t => t.id === id);
      document.getElementById("tareaInput").value = tarea.texto;
      editandoId = id;
    }


      function eliminarTarea(id) {
      tareas = tareas.filter(t => t.id !== id);
      renderizarTabla();
    }

  function marcarHecha(id) {
      const tarea = tareas.find(t => t.id === id);
      tarea.hecha = !tarea.hecha;
      renderizarTabla();
    }