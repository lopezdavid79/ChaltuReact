import React, {useState, useEffect, useRef} from 'react';

import { getProducts, updateProducts} from '../../services/Index';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Edit(){
    const [products, setProducts] = useState([]);
    const [productSel, setProductSel] = useState("");
    const [datosProducts, setDatosProducts] = useState({});

    useEffect(() =>{
        async function cargaProducts() {
            const response = await getProducts();

            if (response.status === 200) {
                setProducts(response.data.products)
            }
        }
        cargaProducts()
    }, [])

    const handleSelProducts = (event) => {
        const selectedProduct = products.find((product) => product._id === event.target.value)
        setProductSel(event.target.value)
        setDatosProducts(selectedProduct)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputFileRef = useRef();

    const handleSubmit = () => {
        const newArticulo = datosProducts.articulo;
        const newModelo = datosProducts.modelo;
        const newDescripcion = datosProducts.descripcion;
        const newPrecio= datosProducts.precio;
        const newStock= datosProducts.stock;
        const newImagen = inputFileRef.current?.file[0]

        const datosNuevos = {
            articulo: newArticulo,
            modelo: newModelo,
            descripcion: newDescripcion,
            precio: newPrecio,
            stock: new Stock,
            imagen: newImagen
        }

        const confirmActualizar = window.confirm(`¿Estas seguro que querés actualizar el producto?`);
        
        if(confirmActualizar){
            updateProducts(productSelSel, datosNuevos)
            .then((response) => {
                handleClose()
                window.location.reload()
            } )
        }

    };

    return(
        <div>
             <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Actualizar producto</Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header>
                        <Modal.Title>Actualizar Producto</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                        <Form.Group controlId="product">
                                <Form.Label>Seleccionar producto</Form.Label>
                                <Form.Select value={productSel} onChange={handleSelProducts}>
                                    <option>Seleccionar producto</option>
                                    {products.map((product) =>(
                                        <option key={product._id} value={product._id}>
                                            {product.articulo} - {product.modelo} - {product.descripcion} - {product.precio} - {product.stock}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                    {productSel && (
                        <div>
                            <Form.Group controlId="nombre">
                            <Form.Label>Nombre del product</Form.Label>
                            <Form.Control defaultValue={datosProducts.articulo} name="articulo" onChange={(event) => {setDatosProducts({...datosProducts, articulo: event.target.value})}}></Form.Control>
                            </Form.Group>
                        </div>
                    )}
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}>Actualizar product</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>

                </Modal>
        </div>
    )

}


  export default Edit;