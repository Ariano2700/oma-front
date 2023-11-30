document.addEventListener("DOMContentLoaded", function () {
  const inicio_sesion = document.getElementById("inicio_sesion");

  inicio_sesion.addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const title = "¡Debes completar tus datos!";
    const text = "Rellena el formulario para completar tu inicio de sesión";
    /*if(username.includes("@") && username.includes(".com")){
      console.log("Es un correo");
    }else if(/^\d{8}$/.test(username)){
      console.log("Es un dni");
    }else{
      console.log("Es un username")
    }*/
    username === "" || password === ""
      ? alertNoComplete(title, text)
      : await verificarExistencia(username, password);
  });

  async function verificarExistencia(param, password) {
    const response = await fetch(
      `http://localhost:8080/api/trabajador/verificar/existencia/cdu?param=${param}`
    );
    const data = await response.json();
    const valido = data.Existe;
    const title = "¡Email, username o DNI incorrecto!";
    const text = "Verifique si el dato ingresado es correcta o no existe";
    //console.log(valido);
    valido === true
      ? iniciarSesion(param, password)
      : alertNoComplete(title, text); //falta colocar ',' para usar el console log
    //console.log("El correo no existe en la bd");
  }
  async function obtenerRol(rol) {
    try {
      const response = await fetch(`http://localhost:8080/api/rol/rol/${rol}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("La respuesta no es válida");
      }

      const data = await response.json();

      if (data) {
        const nombreRol = data.nombre;
        //console.log(nombreRol);
        return nombreRol;
      } else {
        throw new Error("No se encontró el rol");
      }
    } catch (error) {
      // Manejo de errores
      console.error(error);
      throw error;
    }
  }
  async function iniciarSesion(username, password) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/trabajador/obtener/${username}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("La respuesta no es válida");
      }

      const data = await response.json();

      if (data.password === password) {
        const rol = data.idRol;
        const dni = data.dni;
        //console.log(rol, "con dni", dni);
        const roleName = await obtenerRol(rol);
        //console.log(roleName);
        await iniciarSesionEnPHP(username, dni);
        await alertSuccess(roleName);
        localStorage.setItem("rolSession", roleName);
        setTimeout(() => {
          window.location.href = `../Main/indexView/index.php?role=${roleName}`;
        }, 1500);
      } else {
        const title = "¡Contraseña incorreicta!";
        const text = "Verifique si la contraseña es la correcta";
        alertNoComplete(title, text);
      }
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  }
  async function iniciarSesionEnPHP(username, dni) {
    try {
      const response = await fetch("../php/sesionStart.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, dni: dni }),
      });

      if (!response.ok) {
        throw new Error("La respuesta no es válida");
      }

      const responseData = await response.text();
      //console.log("Respuesta de sesionStart.php:", responseData);

      // Intenta analizar la respuesta como JSON
      const data = JSON.parse(responseData);
      //console.log("dni:", dni);
      if (data.username === username) {
        await guardarDatos(dni);
        console.log("Sesión PHP iniciada con éxito");
      } else {
        console.error("Error al iniciar la sesión en PHP");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function guardarDatos(dni) {
    try {
      const response = await fetch(`../php/saveData.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dni: dni }),
      });
      if (!response.ok) {
        throw new Error(
          `Error en la solicitud: ${response.status} - ${response.statusText}`
        );
      }
      const data = await response.json();
      //console.log(data);

      if (data.dni === dni) {
        //console.log("dni guardado", dni);
      } else {
        console.error("Error al guardar el dni");
      }
    } catch (error) {
      console.error(error);
    }
  }

  /*FUNCION DE ALERTA DINAMICOS CON SWEET ALERT */
  function alertNoComplete(title, text) {
    const alertNoComplete = Swal.fire({
      title: title,
      text: text,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
    return alertNoComplete;
  }
  function alertSuccess(role) {
    const alertSuccess = Swal.fire({
      title: "¡Bienvenido!",
      text: `Iniciando sesion como ${role}`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    return alertSuccess;
  }
  /*FUNCION DE ALERTA DINAMICOS CON SWEET ALERT */
});
