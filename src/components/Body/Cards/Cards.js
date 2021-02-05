export function Cards(props){
    console.log("Card props",props);
    return(
        <div>
            {props.cards.map((item,idx) =>         
                <div>
                    <h3>{item.utilName}</h3>
                    <img src={item.utilImg.src} alt={item.utilImg.alt} />
                    <p>{item.utilDescription}</p>
                </div>
        )}
        </div>
);
}