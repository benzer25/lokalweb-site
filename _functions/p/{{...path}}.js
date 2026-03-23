export function onRequest({ params }) {
  return Response.redirect("https://dashboard.lokalweb.fr/p/" + (params.path || ""), 302);
}
