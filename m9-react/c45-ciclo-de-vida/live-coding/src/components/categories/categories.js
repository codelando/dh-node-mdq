import Category from '../category/Category'

export default function Categories({ categories }) {
    return (
        <>
            <h2>Categorías</h2>
            {categories.map(category => <Category name={category} />)}
            <hr/>
        </>
    )
}