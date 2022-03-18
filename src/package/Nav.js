import '../css/index.css';
import {LangContext} from '../index.js';
import { useContext } from "react";

export const Nav = () => {
    const [lang,setLang] = useContext(LangContext);
    const localization=require(`../localization/Nav_${lang}.json`)[0];

    return <div className="navBar" direction={lang==="ar"?"rtl":"ltr"}>
        <p className="navTitle">{localization.message_1}</p>
       <div style={{display:"inline"}}>
           <p style={{display:"inline",padding:"5px"}}>{localization.message_2}</p>
           <label className="switch" htmlFor="switchLang">
                <input id="switchLang" name="switchLang" type="checkbox" checked={lang==="ar"?false:true} onChange={()=>{setLang(lang==="ar"?"en":"ar")}} />
                <span className="slider round"></span>
            </label>
           <p style={{display:"inline",padding:"5px"}}>{localization.message_3}</p>
       </div>
       
    </div>
};
