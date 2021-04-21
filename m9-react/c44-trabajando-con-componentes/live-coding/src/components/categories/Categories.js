import Category from '../category/Category'
import PropTypes from 'prop-types'

export default function Categories({ categories }) {
    return (
        <>
            <h3>Categorías</h3>
            {categories.map((category, index) => <Category key={`${category}-${index}`} name={category.name} color={category.color} />)}
        </>
    )
}

Categories.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            color: PropTypes.string
        })
    )
}