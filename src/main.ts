import "./style.css";

/*

- Nombre del grupo
- Año de fundacion
- Si esta en activo
- Estilo musical

The Beatles - 1960 - No - 🎵 Pop Rock
Queen - 1970 - No - 🎸 Rock
Ac/Dc - 1973 - Si - 🤘 Hard Rock
Ludwig van Beethoven - 1770 - No - 🎼 Clasica
The Rolling Stones - 1962 - Si - 🎸 Rock

*/

const estiloNombre =
  "font-weight: bold; background-color: #0f0; color: #000; padding: 5px; font-size: 20px;";

interface Grupo {
  nombre: string;
  año: number;
  activo: boolean;
  estilo: string;
}

const grupo1: Grupo = {
  nombre: "The Beatles",
  año: 1960,
  activo: false,
  estilo: "🎵 Pop Rock",
};

const grupo2: Grupo = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  estilo: "🎸 Rock",
};

const grupo3: Grupo = {
  nombre: "Ac/Dc",
  año: 1973,
  activo: true,
  estilo: "🤘 Hard Rock",
};

const grupo4: Grupo = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  estilo: "🎼 Clasica",
};

const grupo5: Grupo = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  estilo: "🎸 Rock",
};

console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);
console.log(grupo5);

console.log(`%c${grupo1.nombre}`, estiloNombre);
console.log(`%c${grupo2.nombre}`, estiloNombre);
console.log(`%c${grupo3.nombre}`, estiloNombre);
console.log(`%c${grupo4.nombre}`, estiloNombre);
console.log(`%c${grupo5.nombre}`, estiloNombre);
