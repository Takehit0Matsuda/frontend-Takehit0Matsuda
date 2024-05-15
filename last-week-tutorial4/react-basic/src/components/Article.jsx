import { useState } from "react";
// import Title from "./Title";
// import Content from "./Content";
// import PublishButton  from "./PublishButton";
import {Title, Content, PublishButton} from "./index";

const Article = (props) => {

    const [isPublished, setIsPublished] = useState(false);
    const publishArticle = () => {
        if(isPublished === true){
            setIsPublished(false);
        }
        else{
            setIsPublished(true);
        }
    };

    return (
        <div>
            <Title title={props.title}/>
            <Content content={props.content}/>
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
            
        </div>
    );
};

export default Article;