import { Badge, Image } from "react-bootstrap";

const EmpleadoRow = ({ empleado }) => {
  return (
    <article className="container item-list py-2">
      <div className="d-flex">
        <div className="d-flex justify-content-center align-items-center ">
          <Image
            className="imagen-perfil"
            src={empleado.pic}
            roundedCircle
            alt="perfil empleado"
          />
        </div>
        <div className="ms-3">
          <h4>{empleado.fullName}</h4>
          <div className="d-flex">
            <h6 className="me-4">CEO</h6>
            <span>
              <Badge pill bg="info">
                Info
              </Badge>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EmpleadoRow;
