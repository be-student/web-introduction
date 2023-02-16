type Props = {
  name: string;
  liked: string[];
};
function Guest({ name, liked }: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {liked.map((like) => (
          <div>{like}</div>
        ))}
      </div>
    </div>
  );
}
export default Guest;
