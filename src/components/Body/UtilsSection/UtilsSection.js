import {Cards} from "../../Body/Cards/Cards";

export function UtilsSection({sectionTitle ,cards}){
    console.log("UtilsSection Props",cards);
    return(
        <section>
            <div>
                <h3>{sectionTitle}</h3>
                <Cards cards = {cards} />
            </div>
        </section>
    );
}