/* eslint-disable react/prop-types */
export default function ListItems(props){
    return(
        <li>
            <a target="_blank" href={props.href}>
                <img src={props.src} alt={props.alt} />
            </a>
        </li>
    )
}