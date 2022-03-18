import React from 'react';
import ReactDOM from 'react-dom';
import {Nav} from './package/Nav.js';
import {RecipeGroups} from './package/RecipeGroups.js';
import { useState, createContext,useEffect} from "react";

export const LangContext = createContext();

const Page=()=>{
  const [lang,setLang]=useState("ar");

  useEffect(()=>{
    document.getElementById("root").style.direction=lang==="ar"?"rtl":"ltr";
},[lang]);

  return  <LangContext.Provider value={[lang,setLang]}>
  <Nav />
  <RecipeGroups />
</LangContext.Provider>;
}


ReactDOM.render(<Page />,
  document.getElementById('root')
);