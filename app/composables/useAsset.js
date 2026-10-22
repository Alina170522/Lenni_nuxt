// Добавляет baseURL (например /Lenni_nuxt/ на GitHub Pages) к путям вида "/images/..."
export const useAsset = () => {
  const base = useRuntimeConfig().app.baseURL.replace(/\/$/, "");
  return (path) => (typeof path === "string" && path.startsWith("/") ? base + path : path);
};
