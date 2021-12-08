import Card from "./Card"
import Skeleton from "./Skeleton";

const List = ({ data }) => {

    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <ul className="kdrama-list">
            {data !== undefined ? data.map((drama, idx) => <Card key={idx} name={drama.name} picture={drama.picture} year={drama.yearGenresSeason} desc={drama.descripation} />) :

                arr.map((_, idx) => <Skeleton key={idx} />)

            }
        </ul>

    )

}

export default List;