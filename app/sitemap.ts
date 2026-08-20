import type { MetadataRoute } from "next";
import { cursos } from "@/lib/cursos";

const BASE_URL = "https://igni-alpha.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/quienes-somos",
    "/autoridades",
    "/cursos",
    "/niveles",
    "/instituciones",
    "/tienda",
    "/proximamente",
    "/verificar",
    "/terminos",
    "/privacidad",
    "/contacto",
  ];

  const staticRoutes: MetadataRoute.Sitemap = paths.map((path) => {
    return {
      url: new URL(path, BASE_URL).toString(),
      lastModified: new Date(),
    };
  });

  const cursoRoutes: MetadataRoute.Sitemap = cursos.map((c) => {
    return {
      url: new URL("/cursos/" + c.slug, BASE_URL).toString(),
      lastModified: new Date(),
    };
  });

  return staticRoutes.concat(cursoRoutes);
}
