import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
    const [products, setproducts] = useState([])
    
    useEffect(() => {
        getProducts()
            .then(result => {
                setproducts(result)
            })
    })
    
    
    return (
        <main>
            <h1>{greeting}</h1>
            <ItemList products = {products} />
        </main>

    )
}

export default ItemListContainer