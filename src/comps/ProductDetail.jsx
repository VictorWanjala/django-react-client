import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const ProductDetail = () => {
    const [product, setProduct] = useState('')
    const {id} = useParams()

    const navigate = useNavigate()

    const getSingleProduct = async ()=>{
        const {data} = await axios.get(`http://127.0.0.1:8001/api/${id}/`)
        console.log(data)
        setProduct(data)
    }

    useEffect(()=>{
        getSingleProduct();
    },[])

    //delete products

    const deleteProduct = async (id)=>{
        await axios.delete(`http://127.0.0.1:8001/api/${id}/`)
        navigate('/')
    }

    
  return (
    <div>
        <h1>Product Detail</h1>
        <div className="single-product-info">
            <img src={product.image} height='200' width='300' />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>

            <Link className="btn btn-primary m-2" to={`/${product.id}/update`}>Update</Link>
            <Link className="btn btn-danger m-2" onClick={()=>{
                deleteProduct(product.id)
            }}>Delete</Link>


        </div>
    </div>
  )
}

export default ProductDetail