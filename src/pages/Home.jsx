import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../components/Loading"
import ProductCard from "../components/ProductCard"
import Separateur from "../components/Separateur"

export const Home = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    console.log(products.length)


    const fetchProducts = async () => {
        setLoading(true)
       await axios.get("http://localhost:3000/products")
             .then((res) => 
             { 
                 setProducts(res.data)   
            }).catch((e) => console.log(e))
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            })
    }
        
    
    useEffect(() => {

     fetchProducts()

    }, [])


    return (
        <main>
        {/* DESCRIPTION */}
        <section className="lg:flex block gap-5 my-44 container mx-auto">
            <div className="lg:w-1/2 w-full flex flex-col justify-between">
                <div>
                    <h1 className="text-7xl font-bold mb-5"><span className="text-pink-700" ></span></h1>
                    <p className="text-lg"></p>
                </div>
    
                <div className="flex gap-10">
                </div>
            </div>
            <div className="lg:w-1/2 w-full">
            </div>
    
        </section>
        {/* SEPATEUR */}
    
        {/* CATÉGORIES LES PLUS POPULAIRES */}
        <section className="container mx-auto">
            <div>
            </div>
            {/* CARDPRODUCT */}



                
    
        </section>
        {/* SEPATEUR */}
    
    </main>
    )
  }