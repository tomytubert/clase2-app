import {UtilsSection} from "../../components/Body/UtilsSection/UtilsSection";
import {DevelopersSection} from "../../components/Body/DevelopersSection/DevelopersSection";

export function Body({utilsSection,developersSection}){
    return(
        <section>
            <UtilsSection  {...utilsSection} />
            <DevelopersSection {...developersSection} />
        </section>
    );
}