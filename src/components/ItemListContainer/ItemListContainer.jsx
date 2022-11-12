import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gFetch } from '../../utils/gFetch'
import './ItemListContainer.css'




const ItemListContainer = () => {  
    const [products, setProducts] = useState([])
    const {categoriaId} = useParams()
    
    useEffect(()=> {
        if (categoriaId) {
            gFetch()
            .then(resp =>  setProducts(resp.filter(prod => prod.categoria === categoriaId)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
            
        }else{
            gFetch()
            .then(resp =>  setProducts(resp))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false)) 
        }
        
        
    }, [categoriaId])

    
    console.log(categoriaId)


    return (
        <>
            <div>
                <center>
                <h1 className='m-3'>SNEAKERS - Venta de Zapatillas y Accesorios</h1>
                </center>

                <div className='cards container ml-5' >


                    {products.map(obj => <div key={obj.id} className='card w-25 p-3 m-1 me-1 mb-1'>
                        <Link to={`/detail/${obj.id}`} >
                            <div className='card-header'>
                                {obj.name}
                            </div>
                            <div className='card-body'>
                                <center>
                                    <img src={obj.foto} className="w-50" />

                                </center>
                            </div>
                            <div className='card-footer w-100'>
                                precio : $ {obj.price}
                                <br></br>
                                stock: {obj.stock}
                            </div>

                        </Link>

                    </div>)}


                </div>
            </div>

</>
    )}


            export default ItemListContainer