export default {
    fetchData: async (page: number, limit: number) => {
        const response =  await fetch('https://dummyjson.com/products?limit='+limit+'&skip='+((page-1)*limit));
        return response.json();
    },
    fetchProduct: async (id: any) => {
        const response =  await fetch('https://dummyjson.com/products/'+id);
        return response.json();
    }
}