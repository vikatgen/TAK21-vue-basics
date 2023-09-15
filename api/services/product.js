import { fakeStoreAPI } from "../fakeStoreService";

export const getProducts = async () => {
    try {
        const response = await fakeStoreAPI.get("/products");
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getCategories = async () => {
    try {
        const response = await fakeStoreAPI.get("/products/categories");
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getSingleProduct = async (id) => {
    try {
        const response = await fakeStoreAPI.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const response = await fakeStoreAPI.get(
            `/products/category/${category}`
        );
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
