import Link from "next/link"


export default function ArtFooter() {
    // Dynamic data for footer sections
    const footerSections = [
        {
            title: "COMPANY",
            links: [
                { label: "ABOUT US", href: "#" },
                { label: "WHY CHOOSE US", href: "#" },
                { label: "PROJECTS", href: "#" },
                { label: "COLLABORATIONS", href: "#" },
                { label: "WORK WITH US", href: "#" },
            ],
        },
        {
            title: "SERVICES",
            links: [
                { label: "STRATEGIC BRANDING", href: "#" },
                { label: "WEBSITE UI DESIGN", href: "#" },
                { label: "PRINTING DESIGN", href: "#" },
                { label: "DIGITAL MARKETING", href: "#" },
                { label: "PERSONALIZED SERVICE", href: "#" },
            ],
        },
        {
            title: "CLIENTS",
            links: [
                { label: "RESOURCES", href: "#" },
                { label: "CASE STUDIES", href: "#" },
                { label: "TESTIMONIALS", href: "#" },
                { label: "WORK PROCESS", href: "#" },
                { label: "CUSTOMER SERVICE", href: "#" },
            ],
        },
    ]

    return (
        <footer className="">
            <div className=" flex flex-col justify-between lg:h-[650px]  mx-auto bg-[#121212] text-white 
            px-4 md:px-12 mt-20 lg:rounded-b-[50px] rounded-b-[20px] pt-5 md:pt-16 ">
               
                <div className="flex flex-col md:flex-row justify-between lg:gap-8  gap-5">
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-medium lg:mb-6 mb-3">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                  
                        <div className="lg:w-[524px]   w-full">
                            <div className="bg-[#222222] md:p-8 rounded-lg">
                                <div className="mb-4">SUBSCRIBE TO OUR</div>
                                <h3 className="lg:text-5xl  text-2xl font-bold mb-8">NEWSLETTER</h3>
                                <div className="flex flex-col sm:flex-row gap-4">

                                    <input type="text" placeholder="Your email address" className="bg-[#333333] text-white p-2 rounded-lg w-full" />
                                    <button className="bg-white text-black p-2 rounded-3xl w-full">SUBSCRIBE</button>
                                </div>
                            </div>
               
                    </div>
                </div>





             
          <h1 className=" md:text-[150px] lg:text-[320px]  text-7xl  font-bold lg:-mb-8 ">ARTORA</h1>
       


      

            </div>

            {/* Copy Right Section */}
            <div className="bg-white text-black text-center py-4">
                <p>&copy; 2023 Artique. All rights reserved.</p>
            </div>
        </footer>
    )
}

