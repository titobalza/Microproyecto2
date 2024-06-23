import React from "react";
import pizza from "../../img/pizza.png"; // Asegúrate de tener la imagen de la pizza
import cocaCola from "../../img/cocaCola.png"; // Asegúrate de tener la imagen de la Coca-Cola
import "../../styles/promocion.css"; // Archivo CSS para estilos personalizados

export const Promocion = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex align-items-center justify-content-center position-relative promo-box">
          <div className="text-center bg-light p-4 rounded shadow">
            <img src={pizza} alt="Pizza" className="img-fluid promo-img" />
            <img src={cocaCola} alt="Coca Cola" className="img-fluid promo-img" />
            <h3 className="fw-bold mt-3">POR TAN SOLO</h3>
            <h1 className="display-3 fw-bold">Ref. 10</h1>
            <button className="btn btn-warning position-absolute top-50 end-0 translate-middle-y rounded-circle">
              <span className="fw-bold fs-4">&gt;</span>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-danger text-white p-4 rounded shadow">
            <h2 className="fw-bold">¿Quiénes Somos?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus mauris non neque faucibus, eu gravida velit aliquet. Nullam vitae diam eget eros finibus eleifend. Fusce consectetur velit nunc, at lobortis odio auctor id. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};