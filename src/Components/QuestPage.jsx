import { Link } from "react-router-dom";

function QuestPage({num,userName}){
    if(num === "1"){
        return ( 
            <div>
                <Link to = {`/${userName.firstName}`} >Back to Museums</Link><br/>
                <Link to = {`/${userName.firstName}/firstMuseum/firstLevel`}>1</Link><br />
                <Link to = {`/${userName.firstName}/firstMuseum/secondLevel`}>2</Link><br />
                <Link to = {`/${userName.firstName}/firstMuseum/thirdLevel`}>3</Link><br />
                <Link to = {`/${userName.firstName}/firstMuseum/forthLevel`}>4</Link><br />
                <Link to = {`/${userName.firstName}/firstMuseum/fifthLevel`}>5</Link>
            </div>
            )
        
    }
    if(num === "2"){
        return ( 
            <div>
                <Link to = {`/${userName.firstName}`} >Back to Museums</Link><br/>
                <Link to = {`/${userName.firstName}/secondMuseum/firstLevel`}>1</Link><br />
                <Link to = {`/${userName.firstName}/secondMuseum/secondLevel`}>2</Link><br />
                <Link to = {`/${userName.firstName}/secondMuseum/thirdLevel`}>3</Link><br />
                <Link to = {`/${userName.firstName}/secondMuseum/forthLevel`}>4</Link><br />
                <Link to = {`/${userName.firstName}/secondMuseum/fifthLevel`}>5</Link>
            </div>
            )
        
    }
    if(num === "3"){
        return ( 
            <div>
                <Link to = {`/${userName.firstName}`} >Back to Museums</Link><br/>
                <Link to = {`/${userName.firstName}/thirdMuseum/firstLevel`}>1</Link><br />
                <Link to = {`/${userName.firstName}/thirdMuseum/secondLevel`}>2</Link><br />
                <Link to = {`/${userName.firstName}/thirdMuseum/thirdLevel`}>3</Link><br />
                <Link to = {`/${userName.firstName}/thirdMuseum/forthLevel`}>4</Link><br />
                <Link to = {`/${userName.firstName}/thirdMuseum/fifthLevel`}>5</Link>
            </div>
            )
        
    }
    if(num === "4"){
        return ( 
            <div>
                <Link to = {`/${userName.firstName}`} >Back to Museums</Link><br/>
                <Link to = {`/${userName.firstName}/forthMuseum/firstLevel`}>1</Link><br />
                <Link to = {`/${userName.firstName}/forthMuseum/secondLevel`}>2</Link><br />
                <Link to = {`/${userName.firstName}/forthMuseum/thirdLevel`}>3</Link><br />
                <Link to = {`/${userName.firstName}/forthMuseum/forthLevel`}>4</Link><br />
                <Link to = {`/${userName.firstName}/forthMuseum/fifthLevel`}>5</Link>
            </div>
            )
        
    }
}
export default QuestPage