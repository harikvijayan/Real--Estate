import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Bounce,Flip, toast } from 'react-toastify'




export default function AdminProManage() {

    const[products,setProducts]=useState([])

    useEffect(()=>{
        fetchAllProducts()
    })
    
    const fetchAllProducts = async() =>{
        try
        {
            const response = await axios.get("http://localhost:5000/product/getallcars")
            setProducts(response.data)
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const proDelete = async(id) =>{
        try
        {
            const response = await axios.delete(`http://localhost:5000/product/remove/${id}`)
            toast(response.data.message), {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
                };
             fetchAllProducts()   
        }
        catch(error)
        {
            toast.error(error?.response?.data?.message,{
                transition: Bounce
            })
        } 
    }


console.log(products);
  return (
    <div className='adm-pro-container'>
        {products.length !== 0 ?(
        <div className='adm-pro-section'>
            <h1 className='adm-pro-title'>Commodities For Sale</h1>
            {products.map((car)=>(
            <div className='adm-pro-sector' key={car._id}>
                <img className='adm-pro-img' src={car.photo} alt='pro-img' />
                <div className='adm-pro-detail'>
                    <h2 className='adm-pro-model'>{car.name}</h2>
                    <h3 className='adm-pro-brand'>{car.brand}</h3>
                    <h4 className='adm-pro-price'>{car.price}</h4>
                    <div className='adm-pro-specs'>
                        <p className='adm-pro-thing'>{car.color}</p>
                        <p className='adm-pro-thing'>{car.mileage}</p>
                        <p className='adm-pro-thing'>{car.year}</p>
                        <p className='adm-pro-thing'>{car.enginecc}</p>
                        <p className='adm-pro-thing'>{car.fuel}</p>
                        <p className='adm-pro-thing'>{car.owner}</p>
                    </div>
                </div>
                <button className='adm-del-button' onClick={()=>{proDelete(car._id)}}>Delete</button>
            </div>
            ))}
        </div>
        ):(
        <div className='adm-none-section'>
         <img className='adm-none-image' src='https://media4.giphy.com/media/xUStFKHmuFPYk/giphy.gif?cid=6c09b952ptbdvvq0cujux7qpjxaz0visn254mhzijgyahqrb&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt='none-img'/>
        </div>
    )}
    </div>
  )
}
