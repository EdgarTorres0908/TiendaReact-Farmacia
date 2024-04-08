import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId);

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data();
                const productAdapted = { id: queryDocumentSnapshot.id, ...data };
                setProduct(productAdapted);
            })
            .catch(error => {
                console.error("Error loading product detail:", error);
            });

               
         getProductById(itemId)
             .then(response => {
                 setProduct(response);
             })
            .catch(error => {
                 console.error("Error loading product detail:", error);
             });
    }, [itemId]);

    return (
        <div style={{ background: 'white' }}>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;