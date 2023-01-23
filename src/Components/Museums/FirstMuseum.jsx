import { ArrowBackIosNew } from "@mui/icons-material"
import "../../style/Museums.css"

function FirstMuseum(){
    window.onpopstate = ()=>{}
    return(
        <>
        <img src = "https://www.yerevan.am/uploads/media/default/0001/11/thumb_10033_default_allimages.jpeg" alt = "charents" className = "infoImg"/>
        <p className = "information">
        The Museum history begins from 1921.  First it  was  the historiographical  department of the State Cultural-historical  Museum  established in Yerevan. But themuseum  begins  its main  activity  since 1922 under theleadership of Yervand  Shahaziz, the  historian  andphilologist , who had brought from Nor-Nakhijevan and handed over to the museum the archives  of  M. Nalbandyan,   G. Patkanyan, R. Patkanyan, H. Khalipyan,  S. Shahaziz   as well as  documents, ancientbooks  and other  materials   concerning the Armenians living in Nor-Nakhijevan. Before that Sayat-Novas  autographic  Davtar (note- book) of songs had been handed over to the museum (in October 1921) by H. Tumanyan.
Afterwards the historiographic department of the cultural-historical museum  has  been  completed  byvarious  materials of Armenian classics of literature and institutions, and starting from May 16, 1935 it has been  separated and become an independent institution (Khoren Sargisyan was the first director).  In the  same year  with efforts of the theatrelogist  Sarkis Meliksetyan the theatrical museumhas been  established  in Yerevan. A year before that the memorial-room after  Romanos Melikyan  wasestablished in Yerevan  Conservatory.  Starting   from July21 1942 the Museum of Literature has been included in the Academy  of  Sciences of the Soviet Union at  first  asan  Armenian  branch, then  in the  structure of  Academy of  Sciences   of  Armenia as an Institute of Language and Literature and finally, as an independent  department  ofthe   Institute  of Literature.  Since May 1953 the  Museumacts under the competence  of  Ministry  of  Culture  as anseparate department of the Armenian State Historical Museum.
In  October  1954 the Museum of  Literature  and Art has  been formed  by  joining the literary and theatrical  museums  and  the   study  after Romanos Melikyan.  Till 1963 the  museum  acted  first  underthe competence  of  Academy of Sciences  and  from  that  period to nowadays under the competence ofthe  Ministry  of  Culture.   Since  1967 the Museum has been named after Y. Charents.  Later (in 1977) the museum housed materials  concerning  the Armenian Cinematographic Art.

        </p>
        </>
    )
}
export default FirstMuseum