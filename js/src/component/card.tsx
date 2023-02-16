type Props = {
  imageUrl: string;
  title: string;
  prefer: number;
};

const Card = (props: Props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "300px",
            height: "500px",
          }}
          src={props.imageUrl}
          alt={props.title}
        />
        <div>
          <h2 style={{ marginTop: "30px" }}>{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
