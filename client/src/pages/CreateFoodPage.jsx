import React from 'react';
import logo from '../assets/img/logo-google.svg'
import cart from '../assets/img/cart.svg'
import all from '../assets/img/albums.svg'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const CreateFoodPage = () => {
    let navigate= useNavigate()

    const createFood=async (event)=>{
        event.preventDefault();

        let formdata= new FormData(event.target);

        let name=formdata.get('name')
        let code=formdata.get('code')
        let img=formdata.get('img')
        let category=formdata.get('category')
        let qty=formdata.get('qty')
        let price=formdata.get('price')

        await axios.post("/api/create",{
            name:name,
            code:code,
            img:img,
            category:category,
            qty:qty,
            price:parseFloat(price)
        })
        navigate('/')
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

                            <Link to="/" className="btn btnh"> <img alt="" className="logo" src={all}/> All
                                Food</Link>
                        </div>
                    </div>

                    <div className="col-10 mt-2 bg-height">
                        <p className="mt-md-5"></p>
                        <hr/>
                        <div className="container mt-5">
                            <p>Create Food Item</p>
                            <form onSubmit={createFood}>
                                <div className="row ">
                                    <div className="col-md-4 mt-5">
                                        <label>Food Name</label>
                                        <input className="form-control form-control-sm rounded h-100 w-75" name="name"
                                               placeholder="Type Your Food Name"/>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <label>Food Code</label>
                                        <input className="form-control form-control-sm rounded h-100 w-75" name="code"
                                               placeholder="Type Your Food Code"/>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <label>Food Image</label>
                                        <input className="form-control form-control-sm rounded h-100 w-75" name="img"
                                               placeholder="Enter Your Image Link"/>

                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <label>Food Category</label>
                                        <input className="form-control form-control-sm rounded h-100 w-75" name="category"
                                               placeholder="Type Food Category"/>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <label>QTY</label>
                                        <input className="form-control form-control-sm rounded h-100 w-75" name="qty"
                                               placeholder="Type QTY"/>
                                    </div>
                                    <div className="col-md-4 mt-5">
                                        <label>Price</label>
                                        <input className="form-control form-control-sm rounded h-100 w-75" name="price" placeholder="Type Food Price"/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-sm btn-success mt-5 ">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            </div>
    );
};

export default CreateFoodPage;