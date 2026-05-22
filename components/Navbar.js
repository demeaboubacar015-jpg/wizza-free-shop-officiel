export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Wizza Free Shop</h1>
      <div>
        <a href="/" className="mr-4">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
