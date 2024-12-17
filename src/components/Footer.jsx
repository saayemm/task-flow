
export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="flex justify-between max-w-[900px] m-auto">
        <small>&copy;{year} All right reserved</small>
        <small>Version 1.0.0</small>
    </footer>
  )
}
