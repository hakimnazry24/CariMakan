const Header = () => {
    return (
        <>
            <nav className="fixed top-0 w-full z-20 bg-white">
                <div className="flex justify-between items-center p-6 px-10">
                    <a href="/">
                        <h1 className="text-2xl font-bold">CariMakan</h1>
                    </a>
                    <a href="/order" className="p-2 px-4 rounded-xl bg-green3 text-white border border-slate-300">Order Now</a>
                </div>
            </nav>
        </>
    )
}
export default Header