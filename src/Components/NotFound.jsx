function NotFound() {
  window.onpopstate = () => {};
  const notFound = {
    "text-align": "center",
    color: "red",
  };
  return <h1 style={notFound}>This page was not found</h1>;
}

export default NotFound;
