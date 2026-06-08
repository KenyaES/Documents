const Card = (props) =>{
    return(
        <div className="card">
            <td>
                <h5>{props.event}</h5>
                <p>{props.info}</p>
            </td>
        </div>
    );
    
};

export default Card;