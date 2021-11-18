export default function List ({listItem}){
    return  <li className="list-group-item">
                {listItem.name}
                <button type="button" onClick={() => {}} className="btn btn-outline-danger float-end px-2 py-1">Delete</button>
            </li>
}