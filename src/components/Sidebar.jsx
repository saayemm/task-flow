import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  return (
    <div className="bg-zinc-300 w-1/3 p-4 h-full">
        <AddItemForm/>
        <ButtonGroup/>
    </div>
  )
}
