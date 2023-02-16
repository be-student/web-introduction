import { Paper } from "@mui/material";

type Props = {
  title: string;
};
function MovieItem({ title }: Props) {
  return (
    <div style={{ margin: "10px" }}>
      <Paper
        square
        elevation={2}
        style={{ padding: "5px", borderRadius: "5px" }}
      >
        {title}
      </Paper>
    </div>
  );
}
export default MovieItem;
