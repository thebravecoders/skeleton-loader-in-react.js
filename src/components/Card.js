const Card = ({ name, picture, desc, year }) => {

    return (
        <li>
            <div className="card">
                <img src={picture} alt="" />
                <div className="contents">
                    <h1>{name}</h1>
                    <p className="year">{year}</p>
                    <p className="desc">{desc}</p>
                </div>
            </div>
        </li>
    )

}

export default Card;
