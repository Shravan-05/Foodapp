import React, { useContext, useEffect, useState } from 'react';
import Productitems from './Productitems';
import NoteContext from '../context/Notecontext';
import { useNavigate } from 'react-router-dom';

const Product1 = () => {
    const navi=useNavigate();
    const context = useContext(NoteContext);
    const { product, getproduct } = context;
    const [value1, setValue] = useState(''); // State for search input

    useEffect(() => {
        if(localStorage.getItem("token"))
        {
        getproduct(); // Fetch products on component mount
        }
        else
        {
            navi("/login")
        }
    }, []);

    const filterItems = (e) => {
        setValue(e.target.value.toLowerCase()); // Update search input state
    };

    return (
        <>
         
            <div className='container' >
                <div className="container d-flex justify-content-center " >
            <input
                className="form-control me-2 w-50 my-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "200px" }}
                onChange={filterItems}
                value={value1}
            />
            </div>
            <div className='row  w-100'>
    {product && product
        .filter(p => p.name.toLowerCase().includes(value1)) // Filter based on search input
        .map((p) => (
            <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={p._id}>
                <Productitems details={p} />
            </div>
        ))
    }
</div>

            </div>
        </>
    );
};

export default Product1;
