export default defineNuxtRouteMiddleware(() => {
  const store = useStore();
  store.closeAllUI();
});