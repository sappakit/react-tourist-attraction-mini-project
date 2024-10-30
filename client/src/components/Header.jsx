function Header({ inputChange, setInputChange }) {
  return (
    <header className="flex w-full flex-col items-center gap-8">
      <h1 className="text-5xl font-semibold text-sky-500">เที่ยวไหนดี</h1>

      {/* Search bar */}
      <div className="flex w-full flex-col gap-1 px-32">
        <p className="text-neutral-950">ค้นหาที่เที่ยว</p>
        <input
          className="w-full border-b-2 p-1 text-center placeholder:text-center focus:outline-none"
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          value={inputChange}
          onChange={(e) => setInputChange(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
