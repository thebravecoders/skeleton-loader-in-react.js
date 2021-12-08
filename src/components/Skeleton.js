const Skeleton = () => {

    return (
        <div className="card skeleton">
            <div className="card-img loading"></div>
            <div className="contents">
                <h1 className="loading">&#160;</h1>
                <p className="year loading">&#160;</p>
                <p className="desc loading">&#160;</p>
            </div>
        </div>
    )

}


export default Skeleton;