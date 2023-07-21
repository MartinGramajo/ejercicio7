import "./App.css";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <section className="container">
        <div className="display-5 text-center py-5 pb-2 text-white">
          <h1 className="text-center py-5"> Lista de empleados </h1>
        </div>
      </section>

      <EmpleadoList />
      <footer className="py-5 mt-auto bg-dark">
        <h5 className="text-center text-white">
          {" "}
          © Todos los derechos reservados
        </h5>
      </footer>
    </div>
  );
}

export default App;
