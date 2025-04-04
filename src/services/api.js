import axios from "axios";
export const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  };
  
  export const fetchProductById = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  };
// const BASE_URL = 'fakestoreapi.com';

// export const fetchProducts = async () => {
//     try {
//         const response = await axios.get(`${BASE_URL}/products`);
//         return response.data.products;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return [];
//     }
// };

// export const fetchProductById = async (id) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/products/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error(`Error fetching product with id ${id}:`, error);
//         return null;
//     }
// };
