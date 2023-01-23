import { Link } from "react-router-dom"

function ForthMuseum(){
    window.onpopstate = ()=>{}

    return(
        <>
        <img src = "https://www.yerevan.am/uploads/media/default/0001/48/thumb_47817_default_allimages.jpeg" alt = "Komitas" className = "infoImg"/>
        <p className = "information">
        The museum’s permanent exhibition spans over eight thematic halls, which present the path of Komitas’s life, along with his compositional, musicological, ethnographic and performance activities. The music of the composer reverberates throughout all the exhibition halls. The curator of the permanent exhibition is Vardan Karapetyan and the designer is Alberto Torsello.
        1st hall: Chronology
        2nd hall: Komitas and his contemporaries
        3rd hall: Komitas and His Contemporaries
        4th hall: Komitas’s Ethnographic Activity
        5th hall: The Music of Komitas
        6th hall: Komitas and Sacred Music
        7th hall: Komitas’s Performances
        8th hall: After Komitas
The project was implemented by the ICOM (International Council of Museums) National Committee of Armenia. Various museum objects were donated from collections kept at the Yeghishe Charents Museum of Literature and Art, the National Gallery of Armenia and the National Library of Armenia, all of which are now included in the permanent exhibition. The Komitas Museum-Institute’s collection is regularly updated with new samples from various parts of the world. The first donation was made by His Holiness Karekin II, Catholicos of All Armenians, on the museum’s opening day.  His Holiness gifted Komitas’s inkstand to the Museum-Institute, which the composer received after his concert in Baku in 1908. The following is engraved on the inkstand: "Dedicated to Father Komitas Vardapet – a prominent musicologist who gives spirit to Armenian folk songs.” It was gifted by his admiring fans.
        </p>
        </>
    )
}
export default ForthMuseum