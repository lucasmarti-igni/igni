export type Producto = {
  slug: string;
  nombre: string;
  descripcion: string;
  precio: number | null;
  moneda: string;
  tipo: "digital" | "fisico";
};

// Catalogo pendiente de carga: Lucas va a pasar los productos reales
// (recetarios, libros, etc.) con nombre, descripcion, precio y formato.
export const productos: Producto[] = [];
