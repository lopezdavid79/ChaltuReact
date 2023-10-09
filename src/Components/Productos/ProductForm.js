import React, { useState } from 'react';

function ProductForm() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={toggleModal}>
        Añadir Producto
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Completa tus datos</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="/create" method="POST">
                  {/* Tu formulario */}
<div className="mb-3">
          <label htmlFor="articulo" className="form-label">Articulo</label>
          <input type="text" className="form-control" name="articulo" id="articulo" placeholder="Ingresar articulo" required autoFocus />
        </div>
        <div className="mb-3">
          <label htmlFor="modelo" className="form-label">Modelo</label>
          <input type="text" className="form-control" name="modelo" id="modelo" placeholder="Ingresar modelo" required />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <input type="text" className="form-control" name="descripcion" id="descripcion" placeholder="Ingresar descripción" />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input type="number" className="form-control" name="precio" id="precio" placeholder="Ingresar precio" />
        </div>
        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">Imagen</label>
          <input type="file" className="form-control" name="imagen" id="imagen" accept="image/*" placeholder="Ingresar imagen" />
        </div>
        <div className="botonenviar">
          {/* <input type="submit" className="btn btn-primary" value="Guardar Producto" /> */}
        </div>
     
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                  Cerrar
                </button>
                <button type="button" className="btn btn-primary">
                  Guardar Producto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductForm;
