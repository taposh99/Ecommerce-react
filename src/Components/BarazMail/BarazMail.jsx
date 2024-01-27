import React from 'react';
import d1 from "../../assets/images/d1.jpg";
import d2 from "../../assets/images/d2.jpg";
import d3 from "../../assets/images/d3.jpg";
import d4 from "../../assets/images/d4.jpg";
import d5 from "../../assets/images/d5.jpg";
import d6 from "../../assets/images/d6.jpg";
const BarazMail = () => {
    return (
        <div className='bg-band' style={{ paddingTop: '123px' }}>
        <div className='container'>
            <h2 className='fs-5'>BARAZ MAIL</h2>
            <div className="d-flex flex-wrap flashsale-container">

            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={d1} className='img-fluid' alt="" />
                <p className='card-title'>Buds Air wireless Bluetooth Headsets in Ear...</p>
                <h3 className='card-price' >৳400</h3>
                <h4 className='card-title'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={d2} className='img-fluid' alt="" />
                <p className='card-title'>Vivo/Oppo/MI in Ear Earphone Good Bass...</p>
                <h3 className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={d3}  className='img-fluid' alt="" />
                <p className='card-title'>TWS i7s Double Dual Mini Earphone With Power Cas...

</p>
                <h3 className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={d4} className='img-fluid' alt="" />
                <p className='card-title'>Vivo in Ear Earphone Best sound quality for any...</p>
                <h3 className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={d5} className='img-fluid' alt="" />
                <p className='card-title'>01 Pcs Anti Rfid Card Holder NFC Blocking...</p>
                <h3 className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={d6} className='img-fluid' alt="" />
                <p className='card-title'>Electric Hot Water Bag pain remover [Multicolor]</p>
                <h3  className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>


            </div>
            
        </div>

        </div>
    );
};

export default BarazMail;