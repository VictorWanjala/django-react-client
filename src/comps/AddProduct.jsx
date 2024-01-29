import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AddProduct = () => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const navigate = useNavigate

  const AddProductInfo = async () => {
    let formField = new FormData()

    formField.append('name', name)
    formField.append('price', price)
    formField.append('category', category)
    formField.append('description', description)

    if(image !== null){
      formField.append('image', image)
    }
    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8001/api/',
      data: formField
    }).then((res)=>{
      console.log(res.data);
      navigate('/')
    })
  }
  return (
    <div>
       <h1>Add product</h1> 
       <div className="container">
        <div className="form-group">
          <div className="form-control">

          <div className="form-group">
            <label> selected image to upload</label>
            <input type="file"
                className="form-control form-control-lg"
                placeholder="Enter product name"
                name='image'
                onChange={(e)=> setImage(e.target.files[0])}
            />
            </div>

            <div className="form-group">
            <input type="text"
                className="form-control form-control-lg"
                placeholder="Enter product name"
                name='name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            </div>
            
          <div className="form-group">
            
          <input type="text"
                className="form-control form-control-lg"
                placeholder="Enter product price"
                name='price'
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
            />

          </div>

          <div className="form-group">
          <textarea type="text"
                className="form-control form-control-lg"
                placeholder="Enter product description"
                name='description'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
          <input type="text"
                className="form-control form-control-lg"
                placeholder="Enter product category"
                name='category'
                value={name}
                onChange={(e)=> setCategory(e.target.value)}
            />
          </div>

          <button className="btn btn-success" onClick={AddProductInfo}>Add product</button>

            
          </div>
        </div>
       </div>
    </div>
  )
}

export default AddProduct