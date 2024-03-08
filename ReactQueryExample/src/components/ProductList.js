import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [page, setPage] = useState(1);

    // Recupero el QueryClient creado en App, nos va a servir para la mutacion
    const queryClient = useQueryClient();

    // Metodo para hacer fetch de los productos
    const getProducts = async () => {
        const response = await Axios.get(`https://peticiones.online/api/products?page=${page}`);
        return response.data;
    }

    // No vamos a hacer un post en la API realmente, en el ejemplo solo vamos a simular que agregamos
    // un producto para que la lista se tenga que volver a cargar.
    const addProduct = async () => {
        setTimeout(() => {
            alert("Se ha agregado un producto");
        }, 1000);
    }

    // Los parametros son el id y la función a ejecutar.
    // El id es array porque el primero es la "base", el segundo es mas especifico, puede haber mas.
    // Si cambio la pagina, actualizo solo las requests con la page en el id, pero
    // si agrego un producto refresco todo, voy a la base, a products sin dar bola a page.
    const { data, status } = useQuery(['products', page], getProducts);

    // Nos permite hacer cambios sobre la query. Ej, si hacemos un post recarga lista de productos.
    // Le pasamos el metodo a ejectuar y la funcion onSuccess, que se correra cuando la mutacion sea exitosa.
    // En onSuccess le avisamos al query client que el fetch "products" (sin importar la pagina), esta
    // invalidado, por lo que no puede usar lo que guardo en cache y debe hacer refetch.
    const { mutateAsync } = useMutation(
        addProduct,
        () => {
            queryClient.invalidateQueries(['products']);
        }
    );

    if(status === 'loading') 
        return <p>Cargando productos</p>;

    if(status === 'error') 
        return <h2>ERROR</h2>;

    return (
        <>
            <div className='buttons'>
                <button onClick={() => setPage(1)}>Pagina 1</button>
                <button onClick={() => setPage(2)}>Pagina 2</button>
            </div>
            <div className='list'>
                {data.results.map(prod => (
                    <ProductCard key={prod._id} product={prod} />
                ))}
            </div>
            <div className='buttons'>
                <button id='btnAdd' onClick={() => {
                    mutateAsync();
                }}>
                    Agregar Producto
                </button>
            </div>
        </>
    );
}

export default ProductList;