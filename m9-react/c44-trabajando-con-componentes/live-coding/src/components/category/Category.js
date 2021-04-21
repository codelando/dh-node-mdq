import './style.css'
import PropTypes from 'prop-types'

export default function Category({ name, color }) {
    return (
        <span style={{ backgroundColor: color }} className="category">{name}</span>
    )
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string
}

Category.defaultProps = {
    color: 'gray'
}