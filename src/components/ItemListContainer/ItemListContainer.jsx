import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { gFetch } from "../../utils/gFetch";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = (obj) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    useEffect(() => {
        if (categoriaId) {
            gFetch()
                .then((resp) =>
                    setProducts(resp.filter((prod) => prod.categoria === categoriaId))
                )
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        } else {
            gFetch()
                .then((resp) => setProducts(resp))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [categoriaId]);

    console.log(products);

    return loading ? (
        <h4 className="text-center mt-5">Cargando, aguarde un momento...</h4>
    ) : (
        <div className="row text-center">
            <h1 className="m-5">Nuestros Productos</h1>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-5">
                {products.map((obj) => (
                    <section key={obj.id}>
                        <Link to={`/detail/${obj.id}`}>
                            <div
                                className="card text-center text-dark"
                                style={{ width: "18rem" }}
                            >
                                <img
                                    className="card-img-top img-fluid"
                                    src={obj.foto}
                                    alt="foto-product"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{obj.name}</h5>
                                    <p>$ {obj.price}</p>
                                    <button className="btn btn-danger">Ver Detalle</button>
                                </div>
                            </div>
                        </Link>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
