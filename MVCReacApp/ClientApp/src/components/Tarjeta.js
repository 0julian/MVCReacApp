const Tarjeta = (props) => {
    return (
        <div class="card text-center bg-dark mt-5">
            <div class="card-body">
                <h1 className="card-title text-info">{ props.titulo || "Titulo de la tarjeta"}</h1>
                <p className="card-text text-light">{props.descripcion || "Descripcion de la tarjeta"}</p>
                <button className="btn btn-danger">{ props.textbutton || "Click aqui"}</button>
            </div>
        </div>
    )
}

export default Tarjeta