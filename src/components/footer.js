import React from "react";
import Leaf from '../assets/img/footer.png'


const Footer = ()=>{
    return(
        <div className="footer" style={{
            backgroundColor: '#FFAF00',
            height :'54px',
            position :'relative',
            margin: '0',
            width: '100%',
            marginTop : '100px'
        }}>
            <p style={{
                fontFamily: 'Product Sans',
                fontWeight: '400',
                fontSize: '18px',
                height: '22px',
                textAlign: 'center',
                color: '#FFFFFF',
                paddingTop: '15px'
            }}>
                Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved
            </p>
            <img src={Leaf} alt="" style={{
                bottom: '0px',
                right: '0px',
                position: 'absolute'
            }}/>
        </div>
    )
}

export default Footer