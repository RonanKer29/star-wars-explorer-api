import DetailsItem from "./DetailsItem";

const DetailsList = ({ data, category, onItemClick }) => {
  return (
    <ul>
      {data.map((item, i) => (
        <li className="ml-2" key={i}>
          <DetailsItem onItemClick={onItemClick} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default DetailsList;
{
  /* <ul>
  {data.map((item, i) => (
    <li className="ml-2" key={i}>
      {item.name || item.title}
    </li>
  ))}
</ul>; */
}
