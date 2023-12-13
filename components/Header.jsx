const Header = () => {
    return (
        <>
            <nav className="fixed top-0 w-full z-10">
                <div className="flex justify-between items-center p-6 px-10">
                    <a href="">
                        <h1 className="text-2xl font-bold">CariMakan</h1>
                    </a>
                    <a href="" className="p-2 px-4 rounded-xl bg-blue-200">Order</a>
                </div>
            </nav>
        </>
    )
}
export default Header