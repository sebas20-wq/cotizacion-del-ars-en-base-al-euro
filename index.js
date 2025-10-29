const urlAntigua = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-04-04/v1/currencies/eur.json';
const urlActual = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-10-20/v1/currencies/eur.json';

async function obtenerCotizacion(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.eur.ars;
}

async function main() {
  try {
    console.log("Obteniendo cotizaciones del Euro (EUR) frente al Peso Argentino (ARS)...\n");

    const cotizacionAntigua = await obtenerCotizacion(urlAntigua);
    const cotizacionActual = await obtenerCotizacion(urlActual);

    console.log(`Cotización del 2024-04-04: 1 EUR = ${cotizacionAntigua} ARS`);
    console.log(`Cotización del 2025-10-20: 1 EUR = ${cotizacionActual} ARS\n`);

    const diferencia = cotizacionActual - cotizacionAntigua;
    const porcentaje = ((diferencia / cotizacionAntigua) * 100).toFixed(2);

    if (diferencia > 0) {
      console.log(`El Euro subió ${diferencia.toFixed(2)} ARS (${porcentaje}%) entre ambas fechas.`);
    } else if (diferencia < 0) {
      console.log(`El Euro bajó ${Math.abs(diferencia).toFixed(2)} ARS (${Math.abs(porcentaje)}%) entre ambas fechas.`);
    } else {
      console.log(`El Euro mantuvo el mismo valor en ambas fechas.`);
    }
  } catch (error) {
    console.error("Error al obtener las cotizaciones:", error.message);
  }
}

main();
