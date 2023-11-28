const roleURL = () => {
  const rol = new URLSearchParams(window.location.search).get("role");
  return rol;
};
const rolInURl = roleURL();

function goTablaAlimento() {
  window.location.href = `../../TABLAS/TablaAlimento/alimentotb.php?role=${rolInURl}`;
}
function goTablaAnimal() {
  window.location.href = `../../TABLAS/TablaAnimal/animaltb.php?role=${rolInURl}`;
}
function goTablaCategoria() {
  window.location.href = `../../TABLAS/TablaCategoriaAmenaza/catametb.php?role=${rolInURl}`;
}
function goTablaRecinto() {
  window.location.href = `../../TABLAS/TablaRecinto/recintotb.php?role=${rolInURl}`;
}
function goTablaEspecie() {
  window.location.href = `../../TABLAS/TablaEspecie/especietb.php?role=${rolInURl}`;
}
function goTablaTrabajador() {
  window.location.href = `../../TABLAS/TablaTrabajador/trabajadortb.php?role=${rolInURl}`;
}
function goTablaRoles() {
  window.location.href = `../../TABLAS/TablaTrabajadorRol/roltb.php?role=${rolInURl}`;
}

function goIndex() {
  window.location.href = `../../Main/indexView/index.php?role=${rolInURl}`;
}
