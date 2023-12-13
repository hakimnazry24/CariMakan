import Image from "next/image"

export default function Home() {
    return(
        <>
        <div className="bg-green1 absolute top-0 left-0 w-full h-96 z-0">&nbsp;</div>
            <div className="p-10">              
                {/* hero section */}   
                <div className="mt-20 border inline-block relative p-10 py-16 rounded-xl shadow-lg bg-white z-10">
                    <h2 className="text-lg font-semibold">Good afternoon!</h2>
                    <h1 className="text-3xl font-bold">What do you want <br></br>to eat today?</h1>
                    <form action="" className="mt-5">
                        <input type="text" name="food" id="food" placeholder="Search for food" className="border border-slate-300 p-2 px-5 rounded-xl w-full italic"/>
                        <input type="submit" value="Search" className="block w-full bg-green3 text-white mt-2 p-2 rounded-xl border border-white font-semibold"/>
                    </form>
                </div>
                {/* featured today */}
                <div className="my-8">
                    <h2 className="text-3xl font-bold mb-6">Featured today</h2>
                    <div className="flex justify-around">
                        <div>
                            <img src="/friend-chicken.jpg" alt="food" style={{width: "250px", height: "200px"}} className=" rounded-xl"/>
                            <h3 className="font-bold text-2xl">Menu 1</h3>
                            <h4 className="text-xl font-semibold">RM $$</h4>
                        </div>
                        <div>
                            <img src="/nasi-ayam.jpg" alt="food" style={{width: "250px", height: "200px"}} className=" rounded-xl"/>
                            <h3 className="font-bold text-2xl">Menu 1</h3>
                            <h4 className="text-xl font-semibold">RM $$</h4>
                        </div>
                        <div>
                            <img src="/chicken-wrap.jpg" alt="food" style={{width: "250px", height: "200px"}} className=" rounded-xl"/>
                            <h3 className="font-bold text-2xl">Menu 1</h3>
                            <h4 className="text-xl font-semibold">RM $$</h4>
                        </div>
                    </div>
                </div>
                {/* what is carimakan section*/}
                <div className="text-center py-10 px-32 bg-green1 ">
                    <h1 className="text-3xl font-bold mb-6">What is CariMakan?</h1>
                    <p className="text-xl mx-20">CariMakan is a specialized food ordering platform designed exclusively for the KICT community. This service facilitates seamless lunchtime food orders from various cafes within IIUM, eliminating the need for KICT members to venture outside their premises. With CariMakan, the entire process of ordering food is conveniently accessible at their fingertips</p>
                </div>
                {/* how to use carimakan section */}
                <div className="m-16">
                    <h1 className="text-3xl font-bold mb-10 text-center">How to use CariMakan?</h1>
                    <div className="grid grid-cols-3 gap-14">
                    <div className="text-center">
                            <div className="rounded-full bg-yellow text-2xl font-bold p-10 py-14 inline-block mb-3">Step 1</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum error eligendi rem ipsum, labore ducimus! Ad ducimus molestiae fugit beatae.</p>
                        </div>
                        <div className="text-center">
                            <div className="rounded-full bg-yellow text-2xl font-bold p-10 py-14 inline-block mb-3">Step 2</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum error eligendi rem ipsum, labore ducimus! Ad ducimus molestiae fugit beatae.</p>
                        </div>
                        <div className="text-center">
                            <div className="rounded-full bg-yellow text-2xl font-bold p-10 py-14 inline-block mb-3">Step 3</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum error eligendi rem ipsum, labore ducimus! Ad ducimus molestiae fugit beatae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}