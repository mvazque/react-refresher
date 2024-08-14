import { Link } from "react-router-dom"

const EVENTS = [
    {id: 'e1', title: 'Bake Sale'},
    {id: 'e2', title: 'BBQ Sale'},
    {id: 'e3', title: 'Yard Sale'},
    {id: 'e4', title: 'Fishing Trip'}
]

function EventsPage() {
    return (
        <>
            <h1>The Events Page</h1>
            <ul>
                {EVENTS.map((evnt) => (
                    <li key={evnt.id}>
                        <Link to={evnt.id}>{evnt.title}</Link>
                    </li>
                ))}
                
            </ul>
        </>
        
    )
}

export default EventsPage