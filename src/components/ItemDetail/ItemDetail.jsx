import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";

export const ItemDetail = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        gFetch().then((res) => {
            setProduct(res.filter((el) => el.id === productId));
            console.log(product);
        });
    }, []);

    return (
        <>
            {product.map((obj) => (
                <center>
                    <div key={obj.id} className="card w-50 mx-1">
                        <center>
                            <h5 className="card-header">{obj.name}</h5>
                        </center>
                        <div className="card-body">
                            <center>
                                <img src={`${obj.foto}`} className="w-50" />
                            </center>
                        </div>
                        <div className="card-footer">
                            <p>Total: $ {obj.price}</p>
                        </div>
                    </div>
                </center>
            ))}
        </>
    );
};

export default ItemDetail