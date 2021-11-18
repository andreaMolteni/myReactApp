import List from "./list"

export default function Lists({ lists }) {

return <ul className="list-group list-group-flush">
        {lists.map(list => <List
            listItem={list}
            key={list.id}
            // toggleList={onToggle}
            // removeList={() => dispatch(removeList(list))}
        />)}
    </ul>

        }