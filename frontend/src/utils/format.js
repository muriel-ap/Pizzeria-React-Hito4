export const capitalize = (texto = "") =>
  texto[0]?.toUpperCase() + texto.slice(1);

export const formatPrice = (cantidad) => {
  return cantidad.toLocaleString("es-CL");
};