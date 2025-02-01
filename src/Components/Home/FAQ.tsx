import type React from "react"
import FAQItem from "./FAQItem"

const faqData = [
    {
        question: "What is Next.js?",
        answer:
            "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
    },
    {
        question: "How do I get started with Next.js?",
        answer:
            "To get started with Next.js, you need to have Node.js installed. Then, you can create a new Next.js app using 'npx create-next-app@latest'. Follow the prompts, and you'll have a new Next.js project ready to go!",
    },
    {
        question: "What is Tailwind CSS?",
        answer:
            "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. Instead of pre-designed components, Tailwind provides low-level utility classes that let you build completely custom designs.",
    },
    {
        question: "Can I use Next.js with Tailwind CSS?",
        answer:
            "Yes, absolutely! Next.js and Tailwind CSS work great together. You can easily set up Tailwind CSS in your Next.js project by following the official Tailwind CSS documentation for Next.js integration.",
    },
]

const FAQ: React.FC = () => {
    return (
        <section className="lg:py-[120px] py-20 bg-gray-50 ">
            <div
                className="flex
                flex-col lg:flex-row 
                items-center lg:w-[70%] w-[90%] mx-auto"
            ><div>
                    <h6 className="text-[#ec4814] text-xl font-bold font-['Urbanist'] capitalize leading-[25px]">FAQ</h6>
                    <h6 className="lg:w-[520px] text-[#0e191e] text-xl lg:text-[40px] font-black font-['Urbanist'] capitalize lg:leading-[44.80px] mt-1">Navigate the Digital World with Confidence</h6>
                    <p className="lg:w-[520px] lg:mt-5 mt-2 text-[#5b5b5b] text-lg font-normal font-['Urbanist'] leading-7">Aliquam eros justo, posuere loborti laorematullamcorper the posuer viverra .Aliquam eroo, posuere loborti</p>

                    <div
                        className="mt-5
                            w-[305px] h-[103px] bg-[#fffaf0]
                            rounded-[20px] flex items-center justify-between
                            p-7
                        "
                    >
                        <h6 className="text-[#0e191e] text-[55px] font-extrabold font-['Urbanist'] capitalize leading-[61.60px]">10+</h6>
                        <h6 className="w-[120px] h-[55px] text-[#5b5b5b] text-lg font-normal font-['Urbanist'] leading-7">years of experiences</h6>


                    </div>
                </div>
                <div className="lg:max-w-3xl mx-auto lg:px-4 lg:mt-0 mt-8">

                    <div className="space-y-2">
                        {faqData.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FAQ

