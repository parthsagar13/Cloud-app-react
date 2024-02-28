import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./address.css";

function Address() {
  let { id } = useParams();
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    pincode: '',
    country: '',
    state: '',
    city: '',
    flat: '',
    area: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Link to="/">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "15px" }}>
          <ArrowBackIcon /><a style={{ fontWeight: "700" }}>Add Delivery Address</a>
        </div>
      </Link>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="fullname" name="fullname" placeholder='Full Name (Required)*' value={formData.fullname} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder='Mobile Number (Required)*' value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" id="pincode" name="pincode" placeholder='Pin Code (Required)*' value={formData.pincode} onChange={handleChange} />
            </div>
            <div className="form-group">
              <select id="country" name="country" value={formData.country} onChange={handleChange}>
                <option value="">India</option>
              </select>
            </div>
            <div className="form-group">
              <select id="state" name="state" value={formData.state} onChange={handleChange}>
                <option value="">State (Required)*</option>
                <option value="">Assam</option>
                <option value="">Bihar</option>
                <option value="">Chandigarh</option>
                <option value="">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="">Delhi</option>
                <option value="">Goa</option>
                <option value="">Gujarat</option>
                <option value="">Haryana</option>
                <option value="">Himachal Pradesh</option>
                <option value="">Jammu and Kashmir</option>
                <option value="">Jharkhand</option>
                <option value="">Karnataka</option>
                <option value="">Kerala</option>
                <option value="">Ladakh</option>
                <option value="">Lakshadweep</option>
                <option value="">Madhya Pradesh</option>
                <option value="">Maharashtra</option>
                <option value="">Manipur</option>
                <option value="">Meghalaya</option>
                <option value="">Punjab</option>
                <option value="">Uttar Pradesh</option>
                <option value="">Uttarakhand</option>
              </select>
            </div>
            <div className="form-group">
              <select id="city" name="city" value={formData.city} onChange={handleChange}>
                <option value="">City (Required)*</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" id="flat" name="flat" placeholder='Flat, House no, Building, Company' value={formData.flat} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" id="area" name="area" placeholder='Area, Colony, Street, Sector, Village' value={formData.area} onChange={handleChange} />
            </div>
          </div>
          <Link to={`/checkout/payment/${id}`}>
            <button className="form-group" id='button'>
              SAVE ADDRESS
            </button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Address;