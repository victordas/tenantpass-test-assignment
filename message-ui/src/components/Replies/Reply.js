import { useContext } from "react"
import UserContext from "../../store/user"

const Reply = (props) => {
    const { username } = useContext(UserContext);

    return(
        <li className={`list-group-item ${username === props.from ? 'list-group-item-success' : 'list-group-item-warning'}`}>
            <span>Sent: {props.sentAt}</span> <br />
            { props.from }: {props.body}
        </li>
    );
}

export default Reply;