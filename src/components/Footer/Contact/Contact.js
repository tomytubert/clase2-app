export function Contact({email,phone,address}){
    console.log("Adress",address);
    return(
        <div>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Adress: {address.street}</p>
        </div>
    )
}