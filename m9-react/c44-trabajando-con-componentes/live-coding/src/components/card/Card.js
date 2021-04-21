import './style.css'

export default function Card({ children, highlighted }) {
    
    /* let highlightedElement

    if (highlighted) {
        highlightedElement = <p>(Destacado)</p>
    } */
 
    return (
        <article className="card">
            {highlighted && <p>(Destacado)</p>}
            {children} 
        </article>
    )
}