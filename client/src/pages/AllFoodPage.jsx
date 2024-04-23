import React, {useEffect, useState} from 'react';
import logo from '../assets/img/logo-google.svg'
import cart from '../assets/img/cart.svg'
import all from '../assets/img/albums.svg'
import {Link} from "react-router-dom";
import axios from "axios";
import Loader from '../loader/Loader.jsx';

const CreatePage = () => {

    let [data,setData]=useState([]);

    useEffect(() => {
        (async ()=>{
            await AllFoodData()
        })()
    }, []);
    const AllFoodData=async ()=>{
        let res=await axios.get('/api/read')
        setData(res.data['row'])
    }

    const daleteData=async (id)=>{
        await axios.post(`/api/delete/${id}`)
        await AllFoodData()
    }
    return (
        
        <div className="  ">
            <div className="row ">
                <div className="col-12 d-flex ">

                    <div className="col-2 bg_color">
                        <div>
                            <img alt="" className="mt-3 left-to-right border-rounded bg-secondary  " src={logo}/>
                            <h6 className=" fw-bold bottum text-center ">CRUD FOOD</h6>
                            <hr/>
                        </div>
                        <div className="left-to-right">
                            <p >MENU</p>

                            <Link to="/create" className="btn " ><img alt="" className="logo " src={cart}/> Create Food</Link><br/>

                            <Link to="/" className="btn "> <img alt="" className="logo" src={all}/> All
                                Food</Link>
                        </div>
                    </div>

                    <div className="col-10 mt-2 ">
                        <p className="mt-md-5"></p>
                        <hr/>
                        <div className="container mt-5">
                            <p>All Food List</p>
                            <div className="row ">

                                        { data.length === null ? (<Loader/>):(
                                                data.map((item,i)=> {
                                                    return (
                                                        <div className="col-md-3 p-1">
                                                            <div className="card p-3">

                                                                <img className="w-100 h-100 card-img-top" src={item['img']}/>

                                                                    <p className="text-end ">TK: {item['price']}</p>

                                                                <div className="card-body">
                                                                    <h5 className="card-title">{item["name"]}</h5>
                                                                    <p className="">QTY: {item["qty"]}</p>
                                                                    <p className="card-text">{item['category'].slice(0,50)}</p>
                                                                    <Link to={`/update/${item['_id']}`} className="btn btn-sm btn-success">Eidt</Link>
                                                                    <button onClick={()=>daleteData(item['_id'])} className="btn btn-danger delete-btn btn-sm">Delete</button>
                                                                </div>
    
    
                                                            </div>
                                                        </div>
                                                    )
    
                                                })
                                        )
                                        
                                        }


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreatePage;