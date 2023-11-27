const roleURL = () => {
  const rol = new URLSearchParams(window.location.search).get("role");
  return rol;
};
const rolInURl = roleURL();


function goTablaAlimento() {
  window.location.href = `../TABLAS/TablaAlimento/alimentotb.html?role=${rolInURl}`;
}
function goTablaAnimal() {
    window.location.href = `../TABLAS/TablaAnimal/animaltb.html?role=${rolInURl}`;
  }