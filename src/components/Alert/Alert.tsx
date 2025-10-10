import "../sass/index.scss";
import { CircleX } from "lucide-react";

interface Iprops {
  title: string;
  description: string;
  icon: React.ReactElement;
  onDelete: (id: number) => void;
  id: number;
}
export default function Alert({
  id,
  title,
  description,
  icon,
  onDelete,
}: Iprops) {
  return (
    <div className={title}>
      <div className="alert" style={{ margin: "15px" }}>
        <div className="alert-header">
          <div className="alert-header">
            {icon}
            <h4 style={{ marginLeft: "10px" }}>{title}</h4>
          </div>
          <CircleX onClick={() => onDelete(id)} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
