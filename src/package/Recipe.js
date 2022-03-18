import { useState, useContext } from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import {LangContext} from '../index.js';


export const Recipe = (props)=>{
    let recipe = props.recipe;
    const [lang] = useContext(LangContext);

    const [selectedImageIndex,setSelectedImageIndex]=useState(0);
    const [like,setLike] = useState(false);
    const [selectedImage,setSelectedImage]=useState(recipe.images[0]);

    const localization=require(`../localization/Recipe_${lang}.json`)[0];

    const getStyleSelectedImageIndex=(i)=> {
        if(selectedImageIndex == i) {
            return "selectedImage";
        }

        return "";
    }

    const likeUnLikeRecipe=(e)=>{
        setLike(!like);
    }

    const SelectedImages=()=>{
        return <><div className={`circle ${getStyleSelectedImageIndex(0)}`} onClick={()=>{setSelectedImageIndex(0);setSelectedImage(recipe.images[0])}}></div>
        <div className={`circle ${getStyleSelectedImageIndex(1)}`} onClick={()=>{setSelectedImageIndex(1);setSelectedImage(recipe.images[1])}}></div>
        <div className={`circle ${getStyleSelectedImageIndex(2)}`} onClick={()=>{setSelectedImageIndex(2);setSelectedImage(recipe.images[2])}}></div></>
    }

    return (<div className="recipe" direction={lang==="ar"?"rtl":"ltr"} id={recipe.id}>
    <img className="image" key={recipe.id+"_"+selectedImage.url} alt={selectedImage.description} src={selectedImage.url} />
    <div className="selectedGroup">
        <SelectedImages />
    </div>
    <div style={{position:"relative",display:"flex",justifyContent:"space-between"}}  direction={lang==="ar"?"rtl":"ltr"}>
            <h3 className="title">{recipe.name}</h3>
            <AiTwotoneHeart className={like?"like":"unlike"} onClick={(e)=>{likeUnLikeRecipe(e)}} />
    </div>
    <p className="summary" direction={lang==="ar"?"rtl":"ltr"}>{recipe.description+" "}</p>
    <p  className={`readMore_${lang}`}><a href='#'>{localization.message_1}</a></p>
    </div>);
}