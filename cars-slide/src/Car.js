const Car = ({ clas, url, name, slideChangeHandler, id }) => {
    return (
        <div className={clas}
            style={{ backgroundImage: `url(${url})` }}
            onClick={() => slideChangeHandler(id)}>
            <h3>{name}</h3>
        </div>
    )
}


export default Car
