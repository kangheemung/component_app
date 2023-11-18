function Concept(props){
    return(
        <li className="concept">
          <img  className="img" src={props.image} alt={props.title} />
      　　<h2>{props.title}</h2>
          <p>{props.description}</p> 　　　
        </li>
        );
}
export default Concept;