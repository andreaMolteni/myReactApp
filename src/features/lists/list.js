export default function List ({listItem, onRemoveList}){
    return  <li className="list-group-item">
                {listItem.name}
                <button type="button" onClick={() => onRemoveList(listItem.id)} className="btn btn-outline-danger float-end px-2 py-1">Delete</button>
            </li>
}