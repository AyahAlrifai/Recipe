import { useState, useContext, useEffect } from "react";
import {RecipeGroupsContext} from "./RecipeGroups.js";
import {Recipe} from "./Recipe.js";
import {LangContext} from '../index.js';

export const RecipePage = ()=>{
    const [groupId,setGroupId,state] = useContext(RecipeGroupsContext);
    const [lang] = useContext(LangContext);
    const [recipes,setRecipes]=useState([]);

    useEffect(()=>{
        try {
            const data=require(`../data/${lang}/data${groupId}.json`);
            console.log(data);
            setRecipes(data);
        } catch (ex) {
            if(state === "next") {
                setGroupId(groupId-1);
            } else if(state === "back") {
                setGroupId(groupId+1);
            }
        }
    },[groupId,lang]);

    useEffect(()=>{
        const data=require(`../data/${lang}/data${groupId}.json`);
        setRecipes(data);
    },[]);

    return (
            <div className="recipePage">
                {
                    recipes.map((val)=>{
                        return <Recipe key={val.id} recipe={val}/>;
                    })
                }
            </div>
    );
}