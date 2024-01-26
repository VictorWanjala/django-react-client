import axios from "axios"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";


const ShowProducts = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await axios.get('http://127.0.0.1:8001/api/')
        setProducts(res.data)
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className="products-card-info">
        <h1>Show all products</h1>
        {
            products.map((product, index)=>(
                <Card className='m-2 rounded shadow-lg' style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={product.image}/>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>{product.category}</Card.Text>
                        <Button variant='primary'>Show details</Button>
                    </Card.Body>
                 </Card>
            ))
        }
    </div>
  )
}

export default ShowProducts