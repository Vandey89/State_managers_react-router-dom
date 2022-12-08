import { useNavigate } from "react-router-dom"
import { CardContainer } from "../components/containers"


export const DealCard =({deal, onEdit, onRemove}) => {
    const navigate = useNavigate();
    return(
        <CardContainer>
            
            <input 
            type="checkbox"
            defaultChecked={deal.status}
            onChange={(e) => onEdit(e.target.checked)}
            />
            <span>{deal.text}</span>
            <button onClick={onRemove}> Remove </button>
            <button onClick={() => navigate(`/form/${deal.id}`) }>go to edit</button>
        </CardContainer>
    )
}