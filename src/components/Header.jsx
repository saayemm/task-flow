import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex justify-between bg-slate-200 p-4">
        <Logo/>
        <Counter/>
    </div>
  )
}
