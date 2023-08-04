import React, {useState} from "react";
import axios from "axios";
import {Oval} from 'react-loader-spinner';
import PropTypes from "prop-types";
import '../assets/listingForm.css'


const ListingForm=(props)=> {
    const [formData,setFormData] =  useState({
        sale_type:'For sale',
        price:'$0+',
        bedrooms:'0+',
        home_type:'House',
        bathrooms:'0+',
        sqft:'1000+',
        days_listed:'1 or less',
        has_photos:'1+',
        open_house:'false',
        keywords:''

    })

    const {sale_type,price,bedrooms,home_type,bathrooms,sqft,days_listed,has_photos,open_house,keywords} = formData;
    const [loading,setLoading] = useState(false)

    const onChange = e =>setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = e =>{
        e.preventDefault()

        axios.defaults.headers = {
            'Content-type':'application/json'
        };

        setLoading(true);
        axios.post('http://localhost:8000/api/listings/search',{sale_type,price,bedrooms,home_type,bathrooms,sqft,days_listed,has_photos,open_house,keywords})
        .them(res=>{
            setLoading(false)
            props.setListings(res.data)
            window.scrollTo(0,0)
        })
        .catch(err=>{
            setLoading(false);
            window.scrollTo(0,0);
        })
    }

    return (
      <form onSubmit={e=>onsubmit(e)}>
        <div>
            <div className="dropdowns" >
                <label htmlFor='sale_type'>Sale or Rent</label>
                <select name='sale_type' onChange={e=>onChange(e)} value={sale_type}>
                    <option>For Sale</option>
                    <option>For Rent</option>
                </select>
            </div>
            <div>
                <label className="dropdowns" htmlFor='sqft'>Sqft</label>
                <select name='sqft' onChange={e=>onChange(e)} value={sqft}>
                    <option>1000+</option>
                    <option>1200+</option>
                    <option>1500+</option>
                    <option>2000+</option>
                    <option>Any</option>
                </select>
            </div>
            <div>
                <label htmlFor='price'>Minimum Price</label>
                <select name='price' onChange={e=>onChange(e)} value={price}>
                    <option>$0+</option>
                    <option>$200,000+</option>
                    <option>$400,000+</option>
                    <option>$600,000+</option>
                    <option>$800,000+</option>
                    <option>$1000,000+</option>
                    <option>$200,000+</option>
                    <option>Any</option>
                </select>
            </div>
            <div>
                <label htmlFor='days_listed'>Days Listed</label>
                <select name='days_listed' onChange={e=>onChange(e)} value={days_listed}>
                    <option>1 or less</option>
                    <option>2 or less</option>
                    <option>5 or less</option>
                    <option>10 or less</option>
                    <option>20 or less</option>
                    <option>Any</option>
                </select>
            </div>
            <div>
                <label htmlFor= 'keywords'>Keywords</label>
                <input type="text" name='keywords' onChange={e=>onchange(e)} value={keywords}/>
            </div>
            <div className="checkbox-container">
                <label htmlFor= 'open_house'>Open house</label>
                <input type='checkbox' name='open_house' onChange={e=>onChange(e)} value={open_house} />
            </div>
            <div>
                {loading?<div><Oval/></div>:<button>search</button>}
            </div>

        </div>
      </form>
    )
  }

  ListingForm.propTypes ={
    setListings:PropTypes.func.isRequired
  }
  
  export default ListingForm;