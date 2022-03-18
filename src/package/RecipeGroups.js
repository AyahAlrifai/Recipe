import { useState, createContext } from "react";
import { useContext } from "react";
import {RecipePage} from "./RecipePage.js";
import {LangContext} from '../index.js';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

export const RecipeGroupsContext = createContext();

export const RecipeGroups = ()=> {
    const [groupId,setGroupId]=useState(0);
    const [state,setState]=useState("");
    const [lang] = useContext(LangContext);

    const localization=require(`../localization/RecipeGroups_${lang}.json`)[0];

    return <>
    <RecipeGroupsContext.Provider value={[groupId,setGroupId,state]}>
        <RecipePage />
        <div className="arrowContainer" >
            <p>{localization.message_1}</p>
            <FaArrowLeft  className="arrow" onClick={()=>{setState("next");setGroupId(groupId+1)}} />
            <p>{groupId+1}</p>
            <FaArrowRight className="arrow" onClick={()=>{setState("back");setGroupId(groupId-1)}} />
            <p>{localization.message_2}</p>
        </div>
    </RecipeGroupsContext.Provider>
    </>
}