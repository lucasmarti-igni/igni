export type Producto = {
  slug: string;
  nombre: string;
  descripcion: string;
  gancho?: string;
  incluye?: string[];
  paraQuienEs?: string;
  cierre?: string;
  precio: number | null;
  moneda: string;
  tipo: "digital" | "fisico";
};

export const productos: Producto[] = [
  {
    slug: "alquimia",
    nombre: "Alquimia",
    descripcion:
      "27 mezclas de autor, entre rubs, sales saborizadas, salsas y adobos, para dejar de improvisarle sabor a la carne antes de que toque el fuego.",
    gancho:
      "Hay una mentira que se repite en casi todas las parrillas del mundo, que el sabor está en la carne. No es así. El sabor está en lo que le hacés antes de que toque el fuego, y ahí es donde la mayoría improvisa con lo primero que encuentra en la alacena. Alquimia son 27 preparaciones para que dejes de improvisar, con la firma de alguien que lleva treinta años convirtiendo sal, especias y tiempo en sabor.",
    incluye: [
      "15 rubs y sales saborizadas, tres por proteína (vacuno, cerdo, pollo, cordero y pescado)",
      "4 sales de autor con reducción de vino y cítricos deshidratados",
      "3 salsas de acompañamiento, con el chimichurri tradicional y una versión de autor",
      "5 adobos húmedos, uno por proteína",
      "Guía general de aplicación y conservación, más una ficha en blanco para crear tu propia mezcla",
    ],
    paraQuienEs:
      "Para quien ya domina el fuego y el punto de cocción, pero siente que a sus platos les falta una firma propia. Cada receta trae la mezcla exacta, cómo y cuánto aplicarla, la técnica de cocción que mejor la acompaña, un maridaje sugerido y la nota profesional con el error más frecuente en esa mezcla.",
    cierre:
      "Esto no reemplaza el criterio que se entrena viendo el fuego cambiar en tiempo real, pero es la base sobre la que se construye. Si el punto de cocción todavía se te escapa, la Tabla Maestra del Punto Exacto te lo resuelve, también en la tienda IGNI.",
    precio: 9.99,
    moneda: "euros",
    tipo: "digital",
  },
  {
    slug: "tabla-maestra-del-punto-exacto",
    nombre: "La Tabla Maestra del Punto Exacto",
    descripcion:
      "Las temperaturas, los tiempos y el tacto exactos para vacuno, cerdo, pollo, cordero y pescado, para dejar de adivinar el punto y empezar a controlarlo.",
    gancho:
      "Hay un segundo, nada más, en el que una pieza pasa de perfecta a arruinada, y ese segundo no avisa. Los que asan hace años lo resuelven mirando y tocando, con un instinto que tardaron una década en entrenar. Vos no tenés una década. Tenés esta tabla.",
    incluye: [
      "Temperatura de retiro y temperatura final tras el reposo, para vacuno, cerdo, pollo, cordero y pescado",
      "El tacto de referencia para cada punto, por si no tenés termómetro a mano",
      "Tablas específicas por corte (entraña, vacío, bife de chorizo, secreto ibérico y más)",
      "Ajustes por grosor de pieza, por clima y por condiciones del fuego",
      "Conversión rápida °C/°F y el método del pulgar, paso a paso",
    ],
    paraQuienEs:
      "Para tenerla a mano en la mesada, en el celular o impresa junto a la parrilla el día que te juegues un corte caro delante de gente que vas a querer impresionar.",
    cierre:
      "El punto de cocción es apenas uno de los siete bloques que hacen a un asador completo. Esta tabla te da la base. Si querés entrenar el criterio completo, con certificación incluida, el Nivel II, Asador Profesional IGNI, es tu siguiente paso.",
    precio: 3.99,
    moneda: "euros",
    tipo: "digital",
  },
];
