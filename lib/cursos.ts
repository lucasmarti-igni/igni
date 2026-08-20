export type NivelCurso = {
  nivel: string;
  titulo: string;
  aprendizajes: string;
  precio: number | null;
  moneda: string;
};

export type Curso = {
  slug: string;
  nombre: string;
  resumen: string;
  descripcion: string;
  niveles: NivelCurso[];
};

export const cursos: Curso[] = [
  {
    slug: "parrilla-y-fuego",
    nombre: "Parrilla y Fuego",
    resumen: "Curso de lanzamiento de IGNI. Tres niveles con certificación dual.",
    descripcion: "Parrilla y Fuego es la formación de lanzamiento de IGNI. Tres niveles, cada uno con certificado propio, hasta llegar a la certificación universitaria completa.",
    niveles: [
      { nivel: "Nivel Inicial", titulo: "Certificado de Nivel Inicial", aprendizajes: "Construí tus bases con método y criterio.", precio: 169, moneda: "euros" },
      { nivel: "Nivel Avanzado", titulo: "Certificado de Nivel Avanzado (además del de Nivel Inicial)", aprendizajes: "Llevá la técnica a un nivel de aplicación profesional.", precio: 375, moneda: "euros" },
      { nivel: "Nivel Experto", titulo: "Certificado de Nivel Experto (además de los anteriores)", aprendizajes: "Profundizá en el dominio técnico y conceptual.", precio: 499, moneda: "euros" },
      { nivel: "Los 3 niveles juntos", titulo: "Certificación universitaria completa", aprendizajes: "El camino entero, de inicial a experto, en un solo pack.", precio: 969, moneda: "euros" },
    ],
  },
];
