import "./App.css"

function Card(props){
    return(
        <div className="card">
            <div className="card-img">
            <img src={props.items.imageUrl} alt={props.items.title} image  className="card-image"/>
            </div>
            
            <div className="card-items"> 
                    <p className="title"> {props.items.location} </p>
                    <h2> {props.items.title} </h2>
                    <p><b>{props.items.startDate} : {props.items.endDate} </b></p>
                    <p> {props.items.description} </p>
             </div>
        </div>
    )
}

export default Card
