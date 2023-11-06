import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getProducts(){
    try{
        const response = await axios({
            url: `${baseUrl}/products`,
            method: "GET",
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function newProduct(productsData){
    const formData = new FormData();
    formData.append("articulo", productsData.articulo)
    formData.append("imagen", productsData.imagen )
    formData.append("modelo", productsData.modelo )
    formData.append("descripcion", productsData.descripcion)
    formData.append("precio", productsData.precio)
    formData.append("stock", productsData.stock)
    try{
        const response = await axios({
            url: `${baseUrl}/products`,
            method: "POST",
            data: formData
        })
        return response
    }
    catch(e){
        console.log(e);
    }

}

export async function updateProduct(_id, datosNuevo){
    try{
        const response = await axios({
            url: `${baseUrl}/products/${_id}`,
            method: "PUT",
            data: datosNuevo
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function deleteProducts(_id){
    try{
        const response = await axios({
            url: `${baseUrl}/products/${_id}`,
            method: "DELETE"
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}