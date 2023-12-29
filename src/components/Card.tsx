interface Icard {
    id:number ,
    paragraph:string,
    details:string
}


export const Card = ({id,paragraph, details}: Icard) => {
    
    return(
        <div>
            <h1>Hello world {id}</h1>
            <p>{paragraph}</p>
            <p>{details}</p>
           Component Card
        </div>
    )
}