import { ArrowBackIos } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateLvl, UseHint } from "../FireBase";
import "../style/Levels.css";

function Levels({ num, userName, setUserName }) {
  const [answr, setAnswr] = useState("");






  function checkAnswr(answr, rightAnswer) {
    if(Array.isArray(rightAnswer)){
      if(rightAnswer.filter(el => el.toLowerCase() === answr.toLowerCase()).length){
        return true
      }
    }
    else if(String(answr) === String(rightAnswer)){
      return true
    }
    else{
      return false
    }
  }


  if (num === "1.1")
    return (
      <>
      <Link to={`/${userName.firstName}/CharentsMuseum`}>
      <ArrowBackIos />
    </Link>
      <div className="quiz-container" >
       
        <h1 className="num">1</h1>
        <h2 className="questions">When was the Yeghishe Charents House-Museum founded?</h2>
        <TextField
          required
          fullWidth
          id="answer"
          label="answer"
          name="answer"
          autoComplete="family-name"
          autoFocus
          value={answr}
          onChange={(e) => {
            setAnswr(e.target.value);
          }}
          />
          <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick= {
                ()=> {
                  if(userName.Levels.firstMuseum.lvl1){
                    alert("already done")
                  }
                  else{
                    checkAnswr(answr, 1964)?updateLvl("1.1",setUserName):alert("wrong answer")
                  }
               }
               }
            >
            Submit answer
            </Button>
          <div className="next-prev-cont">
            <p></p>
          <Link to={`/${userName.firstName}/CharentsMuseum/secondLevel`} className = "next-prev">
            Next Level
          </Link>
          </div>
          <p className = "hint" onClick = {()=>{
            if(userName.Levels.firstMuseum.lvl1){

            }
            else if(userName.points > 0)
              UseHint(setAnswr,'1*64')
            else{
              setAnswr("you dont have enough points")
            }
            }}>Use hint</p>
      </div>
      </>
    );
  if (num === "1.2")
    return (
      <>
      <Link to={`/${userName.firstName}/CharentsMuseum`}>
      <ArrowBackIos />
      </Link>
      <div className="quiz-container" >
        
        <h1 className="num">2</h1>
        <h2 className="questions">How many books are currently in Cherents' personal library?</h2>
        <TextField
          required
          fullWidth
          id="answer"
          label="answer"
          name="answer"
          autoComplete="family-name"
          autoFocus
          value={answr}
          onChange={(e) => {
            setAnswr(e.target.value);
          }}
          />
          <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick= {
                ()=> {
                  if(userName.Levels.firstMuseum.lvl2){
                    alert("already done")
                  }
                  else{
                    checkAnswr(answr, 1422)?updateLvl("1.2",setUserName):alert("wrong answer")
                  }
                  
               }
               }
            >
              Submit answer
            </Button>
        <div className="next-prev-cont">
          <Link to={`/${userName.firstName}/CharentsMuseum/firstLevel`} className = "next-prev">
            Previous Level
          </Link>
          <Link to={`/${userName.firstName}/CharentsMuseum/thirdLevel`} className = "next-prev">
            Next Level
          </Link>
        </div>
        <div>
          <p className = "hint" onClick = {()=>{
            if(userName.Levels.firstMuseum.lvl2){

            }
            else if(userName.points > 0)
              UseHint(setAnswr,'14**')
            else{
              setAnswr("you dont have enough points")
            }
            }}>Use hint</p>
        </div>
      </div>
      </>
    );
  if (num === "1.3")
    return (
      <>
        <Link to={`/${userName.firstName}/CharentsMuseum`}>
        <ArrowBackIos />

        </Link>
      <div className="quiz-container">
     
        <h1 className="num">3</h1>
        <h2 className="questions">
          Name one writer name, that Charents loved to read?
        </h2>
        <TextField
          required
          fullWidth
          id="answer"
          label="answer"
          name="answer"
          autoComplete="family-name"
          autoFocus
          value={answr}
          onChange={(e) => {
            setAnswr(e.target.value);
          }}
          />

          <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick= {
                ()=> {
                  if(userName.Levels.firstMuseum.lvl3){
                    alert("already done")
                  }
                  else{
                    checkAnswr(answr, [
                      "movses khorenatsi",
                      "pavsto sbuzand",
                      "grigor narekatsi",
                      "nahapet kuchak",
                      "nerses shnorali",
                      "sayat nova",
                      "leo",
                      "hovhannes tumanyan",
                      "vahan teryan",
                      "avetik isahakyan",
                      "misak metsarents",
                      "bahatur bahaturyan",
                    ])?updateLvl("1.3",setUserName):alert("wrong answer")
                  }
                  
              
               }
               }
            >
              Submit answer
            </Button>
        <div className = "next-prev-cont">
          <Link to={`/${userName.firstName}/CharentsMuseum/secondLevel`} className = "next-prev">
            Previous Level
          </Link>
          <Link to={`/${userName.firstName}/CharentsMuseum/forthLevel`} className = "next-prev">
            Next Level
          </Link>
        </div>
        <p className = "hint" onClick = {()=>{
            if(userName.Levels.firstMuseum.lvl3){

            }
            else if(userName.points > 0)
              UseHint(setAnswr,'* Metsarents')
            else{
              setAnswr("you dont have enough points")
            }
            }}>Use hint</p>
      </div>
      </>
    );
  if (num === "1.4" )
    return (
      <>
      <Link to={`/${userName.firstName}/CharentsMuseum`}>
      <ArrowBackIos />

    </Link>
      <div className="quiz-container">
        
        <h1 className="num">4</h1>
        <h2 className="questions">What year was Charents born?</h2>
        <TextField
                  required
                  fullWidth
                  id="answer"
                  label="answer"
                  name="answer"
                  autoComplete="family-name"
                  autoFocus
                  value={answr}
                  onChange={(e) => {
                    setAnswr(e.target.value);
                  }}
                />
          <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick= {
                ()=> {
                  if(userName.Levels.firstMuseum.lvl4){
                    alert("already done")
                  }
                  else{
                    checkAnswr(answr, 1897)?updateLvl("1.4",setUserName):alert("wrong answer")
                  }
                  
              
                  
               }
               }
            >
              Submit answer
            </Button>
        <div className = "next-prev-cont">
          <Link to={`/${userName.firstName}/CharentsMuseum/thirdLevel`} className = "next-prev">
            Previous Level
          </Link>
          <Link to={`/${userName.firstName}/CharentsMuseum/fifthLevel`} className = "next-prev">
            Next Level
          </Link>
          </div>
          <p className = "hint" onClick = {()=>{
            if(userName.Levels.firstMuseum.lvl4){

            }
            else if(userName.points > 0)
              UseHint(setAnswr,'18*7')
            else{
              setAnswr("you dont have enough points")
            }
            }}>Use hint</p>
      </div>
      </>
    );
  if (num === "1.5")
    return (
      <>
      <Link to={`/${userName.firstName}/CharentsMuseum`}>
      <ArrowBackIos />

    </Link>
      <div className="quiz-container">
       
        <h1 className="num">5</h1>
        <h2 className="questions">What disease did Charents suffer from?</h2>
           <TextField
                  required
                  fullWidth
                  id="answer"
                  label="answer"
                  name="answer"
                  autoComplete="family-name"
                  autoFocus
                  value={answr}
                  onChange={(e) => {
                    setAnswr(e.target.value);
                  }}
                />
          <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick= {
                ()=> {
                  if(userName.Levels.firstMuseum.lvl5){
                    alert("already done")
                  }
                  else{
                    checkAnswr(answr, "morphinism")?updateLvl("1.5",setUserName):alert("wrong answer")
                  }
               }
               }
            >
              Submit answer
            </Button>
          <div className="next-prev-cont">
            <Link to={`/${userName.firstName}/CharentsMuseum/forthLevel`} className = "next-prev">
              Previous Level
            </Link>
            
          </div>
          <p className = "hint" onClick = {()=>{
            if(userName.Levels.firstMuseum.lvl5){

            }
            else if(userName.points > 0)
              UseHint(setAnswr,'morph')
            else{
              setAnswr("you dont have enough points")
            }
            }}>Use hint</p>
      </div>
      </>
    );
  if (num === "2.1")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/TumanyanMuseum/secondLevel`}>
          Next Level
        </Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "2.2")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/TumanyanMuseum/thirdLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/firstLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "2.3")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/TumanyanMuseum/forthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/secondLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "2.4")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/TumanyanMuseum/fifthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/thirdLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "2.5")
    return (
      <div>
        <Link to={`/${userName.firstName}/TumanyanMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName.firstName}/TumanyanMuseum/forthLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "3.1")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>1</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/IsahakyanMuseum/secondLevel`}>
          Next Level
        </Link>
        <p>Previous Level</p>
      </div>
    );
  if (num === "3.2")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/IsahakyanMuseum/thirdLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/firstLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "3.3")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/IsahakyanMuseum/forthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/secondLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "3.4")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/IsahakyanMuseum/fifthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/thirdLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "3.5")
    return (
      <div>
        <Link to={`/${userName.firstName}/IsahakyanMuseum`}>
          Back to levels
        </Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName.firstName}/IsahakyanMuseum/forthLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "4.1")
    return (
      <div className="quiz-container">
        <button>
          <Link to={`/${userName.firstName}/KomitasMuseum`}>
            Back to levels
          </Link>
        </button>
        <h1>1</h1>
        <h2>When was the Toumanyan House-Museum founded?</h2>
        <TextField id="outlined-basic" label="Answer" variant="outlined" />
        <br />
        {/* <p>1964</p> */}
        {/* <h1>Hint</h1> */}
        <button>
          <Link to={`/${userName.firstName}/KomitasMuseum/secondLevel`}>
            Next Level
          </Link>
        </button>
      </div>
    );
  if (num === "4.2")
    return (
      <div>
        <Link to={`/${userName.firstName}/KomitasMuseum`}>Back to levels</Link>
        <h1>2</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/KomitasMuseum/thirdLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/firstLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "4.3")
    return (
      <div>
        <Link to={`/${userName.firstName}/KomitasMuseum`}>Back to levels</Link>
        <h1>3</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/KomitasMuseum/forthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/secondLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "4.4")
    return (
      <div>
        <Link to={`/${userName.firstName}/KomitasMuseum`}>Back to levels</Link>
        <h1>4</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <Link to={`/${userName.firstName}/KomitasMuseum/fifthLevel`}>
          Next Level
        </Link>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/thirdLevel`}>
          Previous Level
        </Link>
      </div>
    );
  if (num === "4.5")
    return (
      <div>
        <Link to={`/${userName.firstName}/KomitasMuseum`}>Back to levels</Link>
        <h1>5</h1>
        <h1>get question from data</h1>
        <h1>Answers</h1>
        <p>answer</p>
        <h1>Hint</h1>
        <p>Next Level</p>
        <br />
        <Link to={`/${userName.firstName}/KomitasMuseum/forthLevel`}>
          Previous Level
        </Link>
      </div>
    );
}

export default Levels;
