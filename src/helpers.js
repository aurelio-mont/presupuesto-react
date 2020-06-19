export const revisarPresupuesto = (presupuesto, restante) => {
  let claseNombre;

  if ((presupuesto / 4) > restante) {
    claseNombre = 'alert alert-danger';
  } else if ((presupuesto / 2) > restante) {
    claseNombre = 'alert alert-warning';
  } else {
    claseNombre = 'alert alert-success';
  }
  console.log(claseNombre);
  return claseNombre;
};
