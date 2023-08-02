import ProductCard from "@/components/ProductCard";
import { getAllProducts, getCategories, getProducts } from "@/utils/api"
import { Product } from "@/utils/types/Product";

export async function generateStaticParams() {
    const categories = await getCategories();

    return categories.map((category: string) => ({
        slug: category
    }))
}

export default async function page ({ params }: { params: { slug: string }}) {
    let products;
    if (params.slug === 'All%20Products') {
        products = await getAllProducts();
    } else {
        products = await getProducts(params.slug)
    }
    
    return (
        <main>
            <div className="bg-dark min-h-fill bg-cover grid grid-cols-auto-fill p-6 md:p-12 lg:p-24 gap-6 md:gap-12 lg:gap-24">
                {products.map((product: Product) => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    )
                })}    
            </div>
        </main>

    )
}