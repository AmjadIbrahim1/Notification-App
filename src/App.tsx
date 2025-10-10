import Alert from "./components/Alert/Alert";
import { Bell, ShieldAlert, BookCheck, Ban, TriangleAlert } from "lucide-react";
import { useState } from "react";
function App() {
  let [data, setData] = useState([
    {
      id: 1,
      title: "alert-default",
      icon: <Bell />,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto fugiat repellendus suscipit minus, nobis ab odio odit officia nihil consectetur! Voluptatum ullam impedit nobis magni accusamus animi, quas omnis! Aperiam et accusamus voluptatibus non nam dolorem culpa officia cupiditate. Eveniet vero praesentium fugit dolor at consequuntur necessitatibus quisquam perferendis.",
    },
    {
      id: 2,
      title: "alert-info",
      icon: <ShieldAlert />,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto fugiat repellendus suscipit minus, nobis ab odio odit officia nihil consectetur! Voluptatum ullam impedit nobis magni accusamus animi, quas omnis! Aperiam et accusamus voluptatibus non nam dolorem culpa officia cupiditate. Eveniet vero praesentium fugit dolor at consequuntur necessitatibus quisquam perferendis.",
    },
    {
      id: 3,
      title: "alert-warning",
      icon: <BookCheck />,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto fugiat repellendus suscipit minus, nobis ab odio odit officia nihil consectetur! Voluptatum ullam impedit nobis magni accusamus animi, quas omnis! Aperiam et accusamus voluptatibus non nam dolorem culpa officia cupiditate. Eveniet vero praesentium fugit dolor at consequuntur necessitatibus quisquam perferendis.",
    },
    {
      id: 4,
      title: "alert-error",
      icon: <Ban />,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto fugiat repellendus suscipit minus, nobis ab odio odit officia nihil consectetur! Voluptatum ullam impedit nobis magni accusamus animi, quas omnis! Aperiam et accusamus voluptatibus non nam dolorem culpa officia cupiditate. Eveniet vero praesentium fugit dolor at consequuntur necessitatibus quisquam perferendis.",
    },
    {
      id: 5,
      title: "alert-success",
      icon: <TriangleAlert />,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, architecto fugiat repellendus suscipit minus, nobis ab odio odit officia nihil consectetur! Voluptatum ullam impedit nobis magni accusamus animi, quas omnis! Aperiam et accusamus voluptatibus non nam dolorem culpa officia cupiditate. Eveniet vero praesentium fugit dolor at consequuntur necessitatibus quisquam perferendis.",
    },
  ]);
  function handleAlertDeletion(id: number) {
    let newData = [...data];
    setData(newData.filter((n) => n.id != id));
  }
  let dataIteration = data.map((d) => (
    <Alert
      key={d.id}
      title={d.title}
      description={d.description}
      icon={d.icon}
      onDelete={handleAlertDeletion}
      id={d.id}
    />
  ));
  return <>{dataIteration}</>;
}

export default App;
