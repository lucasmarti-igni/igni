export type NivelCurso = {
  nivel: string;
  titulo: string;
  aprendizajes: string;
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
    slug: "fuego-y-parrilla",
    nombre: "Fuego y Parrilla",
    resumen:
      "Curso de lanzamiento de IGNI. 3 niveles con certificacion dual.",
    descripcion: "Contenido pendiente de confirmar.",
    niveles: [
      {
        nivel: "Nivel 1",
        titulo: "Certificado de nivel 1",
        aprendizajes: "Contenido pendiente de confirmar.",
      },
      {
        nivel: "Nivel 2",
        titulo: "Certificado de nivel 2 (ademas del de nivel 1)",
        aprendizajes: "Contenido pendiente de confirmar.",
      },
      {
        nivel: "Nivel 3",
        titulo: "Certificado de nivel 3 (ademas de los anteriores)",
        aprendizajes: "Contenido pendiente de confirmar.",
      },
    ],
  },
];
