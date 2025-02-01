import { Facebook, Instagram, Twitter } from "lucide-react";


const Team = () => {
    return (
        <div
            className="lg:py-[120px] lg:pb-5 py-8     "
        >
            <h5 className="text-center text-[#ec4814] text-xl font-bold font-['Urbanist'] capitalize leading-[25px]">Our Team</h5>
            <h5 className=" w-[90%] text-center lg:w-[539px] mx-auto text-[#0e191e] text-2xl lg:text-[40px] font-black font-['Urbanist'] capitalize lg:leading-[44.80px]">Unleash the Power of the Digital Advertising</h5>

            <div
                className=" lg:w-[80%] w-[90%] mx-auto grid lg:grid-cols-2 
                gap-5 mt-10
                "
            >
                {
                    [1, 2, 3, 4].map((item, index) => (
                        <div
                            key={index}
                            className="  h-80 bg-white rounded-[20px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)] 
                    flex  justify-between  >
                " >
                            <div
                                className=' lg:p-8 p-4'
                            >
                                <h1 className="text-[#0e191e] lg:text-2xl text-xl font-bold font-['Urbanist'] capitalize leading-10">Ronald Richards</h1>
                                <h2 className="text-[#5b5b5b] text-lg font-normal font-['Urbanist'] leading-7">Software Developer</h2>
                                <div
                                    className="grid grid-cols-1 gap-2 mt-2"
                                >


                                    <h6 className="text-[#5b5b5b] text-lg font-normal font-['Urbanist'] leading-7">Mentor</h6>
                                    <div className="lg:w-[266px] h-[5px] bg-neutral-100 rounded-[10px] overflow-hidden">
                                        <div
                                            className="  bg-[#ec4814]  h-[5px] rounded-[10px] transition-all duration-300"
                                            style={{ width: `80%` }}
                                        />
                                    </div>
                                    <h6 className="text-[#5b5b5b] text-lg font-normal font-['Urbanist'] leading-7">Mentor</h6>
                                    <div className="lg:w-[266px] h-[5px] bg-neutral-100 rounded-[10px] overflow-hidden">
                                        <div
                                            className="  bg-[#ec4814]  h-[5px] rounded-[10px] transition-all duration-300"
                                            style={{ width: `90%` }}
                                        />
                                    </div>
                                    <div className="lg:w-[174px] h-[38px] bg-[#fffaf0] rounded-[10px] lg:mt-10 mt-2" >
                                        <div
                                            className="flex items-center justify-center h-full gap-5"
                                        >
                                            <Twitter

                                            />
                                            <Facebook

                                            ></Facebook>
                                            <Instagram />

                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div>
                                <div className="lg:w-[250px] w-[180px] h-80 bg-[#d9d9d9] rounded-tr-[20px] rounded-br-[20px]" />
                            </div>
                        </div>

                    ))
                }


            </div>

        </div>
    );
};

export default Team;