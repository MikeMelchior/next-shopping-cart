export const getCategories = async () => {
    let res = await fetch(`https://fakestoreapi.com/products/categories`)
    if(!res.ok) throw new Error('Failed to fetch categories');
    let data = await res.json();
    return data
}

export const getProducts = async (category: string) => {
    let res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    if (!res.ok) throw new Error('failed to fetch products')
    let data = await res.json()
    return data
}

export const getAllProducts = async () => {
    let res = await fetch(`https://fakestoreapi.com/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    let data = await res.json();
    return data
}