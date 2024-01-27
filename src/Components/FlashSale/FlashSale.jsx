import React from 'react';

import f1 from "../../assets/images/f1.jpg";
import f2 from "../../assets/images/f2.jpg";
import f3 from "../../assets/images/f3.jpg";
import f4 from "../../assets/images/f4.jpg";
import f5 from "../../assets/images/f5.jpg";
import f6 from "../../assets/images/f6.jpg";

const FlashSale = () => {
    return (
        <div className='bg-band'>
        <div className='container py-3'>
            <h2 className='fs-5'>FLASH SALE</h2>
            <div className="d-flex flex-wrap flashsale-container">

            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={f1} className='img-fluid' alt="" />
                <p className='card-title'>Buds Air wireless Bluetooth Headsets in Ear...</p>
                <h3 className='card-price' >৳400</h3>
                <h4 className='card-title'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={f2} className='img-fluid' alt="" />
                <p className='card-title'>Vivo/Oppo/MI in Ear Earphone Good Bass...</p>
                <h3 className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={f3}  className='img-fluid' alt="" />
                <p className='card-title'>TWS i7s Double Dual Mini Earphone With Power Cas...

</p>
                <h3 className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={f4} className='img-fluid' alt="" />
                <p className='card-title'>Vivo in Ear Earphone Best sound quality for any...</p>
                <h3 className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={f5} className='img-fluid' alt="" />
                <p className='card-title'>01 Pcs Anti Rfid Card Holder NFC Blocking...</p>
                <h3 className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                <img src={f6} className='img-fluid' alt="" />
                <p className='card-title'>Electric Hot Water Bag pain remover [Multicolor]</p>
                <h3  className='card-price'>৳400</h3>
                <h4 className='card-text'><strike>৳800</strike>33%</h4>
            </div>


            </div>
            
        </div>

        </div>
    );
};

export default FlashSale;