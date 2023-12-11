import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAsyncProcuts } from "../features/products/productsSlice";

const Home = () => {
    const { isLoading, products, error } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAsyncProcuts())
    }, [dispatch])

    return(
        <div style={{marginTop: '4rem'}}>
            {
                !!error ? <h3>{error}</h3> :
                isLoading ? <h3>Loading ...</h3> :
                products.map(product => (
                    <div>{product.title}</div>
                ))
            }
        </div>
    )
}

export default Home