import { Link } from "react-router-dom";

function QuestPage({num,userName}){
    if(num === "1"){
        return ( 
            <div>
                <Link to = {`/${userName}`} >Back to Museums</Link><br/>
                <Link to = {`/${userName}/firstMuseum/firstLevel`}>1</Link><br />
                <Link to = {`/${userName}/firstMuseum/secondLevel`}>2</Link><br />
                <Link to = {`/${userName}/firstMuseum/thirdLevel`}>3</Link><br />
                <Link to = {`/${userName}/firstMuseum/forthLevel`}>4</Link><br />
                <Link to = {`/${userName}/firstMuseum/fifthLevel`}>5</Link>
            </div>
            )
        
    }
    if(num === "2"){
        return ( 
            <div>
                <Link to = {`/${userName}`} >Back to Museums</Link><br/>
                <Link to = {`/${userName}/secondMuseum/firstLevel`}>1</Link><br />
                <Link to = {`/${userName}/secondMuseum/secondLevel`}>2</Link><br />
                <Link to = {`/${userName}/secondMuseum/thirdLevel`}>3</Link><br />
                <Link to = {`/${userName}/secondMuseum/forthLevel`}>4</Link><br />
                <Link to = {`/${userName}/secondMuseum/fifthLevel`}>5</Link>
            </div>
            )
        
    }
    if(num === "3"){
        return ( 
            <div>
                <Link to = {`/${userName}`} >Back to Museums</Link><br/>
                <Link to = {`/${userName}/thirdMuseum/firstLevel`}>1</Link><br />
                <Link to = {`/${userName}/thirdMuseum/secondLevel`}>2</Link><br />
                <Link to = {`/${userName}/thirdMuseum/thirdLevel`}>3</Link><br />
                <Link to = {`/${userName}/thirdMuseum/forthLevel`}>4</Link><br />
                <Link to = {`/${userName}/thirdMuseum/fifthLevel`}>5</Link>
            </div>
            )
        
    }
    if(num === "4"){
        return ( 
            <div>
                <Link to = {`/${userName}`} >Back to Museums</Link><br/>
                <Link to = {`/${userName}/forthMuseum/firstLevel`}>1</Link><br />
                <Link to = {`/${userName}/forthMuseum/secondLevel`}>2</Link><br />
                <Link to = {`/${userName}/forthMuseum/thirdLevel`}>3</Link><br />
                <Link to = {`/${userName}/forthMuseum/forthLevel`}>4</Link><br />
                <Link to = {`/${userName}/forthMuseum/fifthLevel`}>5</Link>
            </div>
            )
        
    }
}
export default QuestPage