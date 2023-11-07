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

// buscar detalle del producto
export async function productById(productId) {
    try{
        const response = await axios({
            url: `${baseUrl}/products/id/${productId}`,
            method: "GET",
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}