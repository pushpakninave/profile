import react from "react";
import { Icon } from '@iconify/react';
import './pop.css';
function Popup(props){
return(props.trigger)?(
    <div className="popup">
        <div className="pop-inner">
            <button className="closebtn" onClick={()=>props.setTrigger(false)}><Icon icon="eva:arrow-back-outline" /></button>
            {props.children}
        </div>
    </div>
    ):"";
}

export default Popup;