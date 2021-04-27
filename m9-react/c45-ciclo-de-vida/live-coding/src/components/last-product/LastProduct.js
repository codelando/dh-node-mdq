
export default function LastProduct({ image, productName, productPrice }) {
    return <article>
        <h2>Último producto cargado</h2>
        <h3>{productName} ($ {productPrice})</h3>
        <img src={image} />
        <hr />
    </article>
}