import { TeamFormData } from '../types';
import teamService from '../api/teamService';

// Arrays de nombres para generar equipos aleatorios
const nombresEquipos = [
  'Real Madrid', 'Barcelona', 'Atlético', 'Valencia', 'Sevilla',
  'Villarreal', 'Athletic', 'Betis', 'Real Sociedad', 'Celta',
  'Deportivo', 'Espanyol', 'Getafe', 'Osasuna', 'Mallorca',
  'Leganés', 'Las Palmas', 'Sporting', 'Racing', 'Valladolid',
  'Rayo', 'Levante', 'Granada', 'Elche', 'Alavés',
  'Girona', 'Cádiz', 'Almería', 'Tenerife', 'Zaragoza'
];

// Sufijos para combinaciones
const sufijos = [
  'FC', 'CF', 'Atlético', 'Deportivo', 'Unión',
  'City', 'United', 'Sporting', 'Racing', 'Real'
];

// Categorías disponibles
const categorias = ['juvenil', 'adulto', 'senior', 'femenino', 'masculino'];

// Tipos de equipo disponibles
const tipos = ['futbol', 'futsal', 'futbol7'];

// URLs de logos válidas
const logosUrls = [
  'https://placehold.co/200x200/png',
  'https://placehold.co/300x300/png',
  'https://placekitten.com/200/200',
  'https://picsum.photos/200',
  'https://via.placeholder.com/150'
];

/**
 * Genera un nombre de equipo aleatorio
 * @returns Nombre de equipo aleatorio
 */
const generarNombreEquipo = (): string => {
  const randomIndex = Math.floor(Math.random() * nombresEquipos.length);
  const randomSufixIndex = Math.floor(Math.random() * (sufijos.length + 2));
  
  // 30% de probabilidad de añadir un sufijo
  if (randomSufixIndex < sufijos.length) {
    return `${nombresEquipos[randomIndex]} ${sufijos[randomSufixIndex]}`;
  }
  
  return nombresEquipos[randomIndex];
};

/**
 * Genera datos aleatorios para un equipo
 * @returns Objeto con datos de equipo aleatorios
 */
export const generarEquipoAleatorio = (): TeamFormData => {
  return {
    nombre: generarNombreEquipo(),
    categoria: categorias[Math.floor(Math.random() * categorias.length)],
    tipo: tipos[Math.floor(Math.random() * tipos.length)],
    // Dejamos entrenador vacío (opcional para creación)
    logoUrl: logosUrls[Math.floor(Math.random() * logosUrls.length)],
    activo: Math.random() > 0.2 // 80% de probabilidad de estar activo
  };
};

/**
 * Crea un equipo con datos aleatorios
 * @returns Promise con la respuesta del servidor
 */
export const crearEquipoAleatorio = async () => {
  const equipoData = generarEquipoAleatorio();
  console.log('Creando equipo:', equipoData);
  return await teamService.createTeam(equipoData);
};

/**
 * Crea múltiples equipos con datos aleatorios
 * @param cantidad Número de equipos a crear
 * @returns Promise con array de respuestas
 */
export const crearEquiposAleatorios = async (cantidad: number) => {
  const resultados = [];
  
  for (let i = 0; i < cantidad; i++) {
    try {
      const resultado = await crearEquipoAleatorio();
      resultados.push(resultado);
      // Pequeña pausa entre creaciones para evitar sobrecarga
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (error) {
      console.error('Error al crear equipo aleatorio:', error);
      resultados.push({ success: false, message: 'Error al crear equipo' });
    }
  }
  
  return resultados;
};

export default {
  generarEquipoAleatorio,
  crearEquipoAleatorio,
  crearEquiposAleatorios
}; 