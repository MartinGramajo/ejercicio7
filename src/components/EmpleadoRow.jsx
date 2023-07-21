import { Badge, Image } from "react-bootstrap";

const EmpleadoRow = ({ empleado }) => {
  const { pic, fullName, title, department } = empleado;

  return (
    <article className="container item-list py-2">
      <div className="d-flex">
        <div className="d-flex justify-content-center align-items-center ">
          <Image
            className="imagen-perfil"
            src={pic}
            roundedCircle
            alt="perfil empleado"
          />
        </div>
        <div className="ms-3">
          <h4>{fullName}</h4>
          <div className="d-flex">
            <h6 className="me-1">{title}</h6>
            <Badge pill bg="info">
              {department}
            </Badge>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EmpleadoRow;
