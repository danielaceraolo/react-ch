import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { gFetch } from "../../utils/gFetch"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [product, setProduct ] = useState ({}) 

    useEffect(()=>{
        gFetch(productId)
        .then(resp => setProduct(resp))
    },[])

    console.log(productId)
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer