import {Developers} from "../../Body/DevelopersSection/Developers/Developers"

export function DevelopersSection({sectionTitle,desctionDescription,developers}){
    //console.log("UtilsSection Props",cards);
    return(
        <section>
        <h3>{sectionTitle}</h3>
        <p>{desctionDescription}</p>
        <Developers developers = {developers}/>
        </section>
    );
}