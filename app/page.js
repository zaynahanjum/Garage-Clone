export default function CrankPage() {
    return (
        <div className="bg-gray-200 dark:bg-black">
            <Main />
            <Services />
            <AboutUs />
            <Gallery />
            <Questions />
            <Pricing />
            <Blog />
        </div>
    )
}

function Blog() {
    return (
        <div className="text-black py-10 dark:bg-black dark:border dark:text-white border-white">
            <p className="text-red-500 text-center font-bold text-sm">LATEST BLOG AND NEWS</p>
            <h1 className="text-center text-2xl md:text-5xl font-bold my-4">
                Our Best Recent Blog And News
            </h1>
            <div className="flex lg:flex-row justify-center flex-col gap-4 my-10 mx-15">
                <BlogCard date={10} head={"Your Trusted Car Service Provider Keeping"} img={"https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-2.jpg"} />
                <BlogCard date={15} head={"Drive Stress-Free Professional Care for Your Car"} img={"https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-3.jpg"} />
                <BlogCard date={20} head={"Reliable Roadside Assistance SpeedySpark Car Care"} img={"https://themehealer.com/php-template/crank-php/assets/images/blog/blog-1-1.jpg"} />
            </div>
        </div>
    )
}

function BlogCard({ img, date, head }) {
    return (
        <div className="bg-white rounded-2xl p-6 flex flex-col flex-1 gap-4">
            <div className="relative w-full">
                <img className="rounded-2xl w-full" src={`${img}`}></img>
                <div className="absolute top-45 right-2 h-20 w-20 rounded-full flex justify-center items-center bg-red-500 text-center">
                    <p className="text-white font-semibold">{date}<br /> OCT</p>
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-1 items-center">
                    <img className="h-4 w-auto" src="admin.png"></img>
                    <p>By admin</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <img className="h-4 w-auto" src="comment.png"></img>
                    <p>0 Comment</p>
                </div>
            </div>
            <p className="text-2xl font-semibold">
                {head}
            </p>
            <div>
                <p className="font-semibold inline-block mr-2">
                    READ MORE
                </p>
                <img className="inline-block h-5 w-auto" src="red-arrow.png" />
            </div>
        </div>
    )
}


function Pricing() {
    return (
        <div className="text-black py-10 dark:bg-black dark:border dark:text-white border-white">
            <p className="text-red-500 text-center font-bold text-sm">PRICING PLAN</p>
            <h1 className="text-center text-2xl md:text-5xl font-bold my-4">
                Our Pricing Plan
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-4 my-10">
                <PricingCard head={"Esay"} img={"broken-car.png"} price={10} para={"Car service is essential for maintaining performance"} para2={"and longevity of vehicle. From oil changes"} />
                <PricingCard head={"Free"} img={"chassis.png"} price={0} para={"Car service is essential for maintaining performance"} para2={"and longevity of vehicle. From oil changes"} />
                <PricingCard head={"Free"} img={"disc-brake.png"} price={30} para={"Car service is essential for maintaining performance"} para2={"and longevity of vehicle. From oil changes"} />
            </div>
        </div>
    )
}

function PricingCard({ head, para, para2, price, img }) {
    return (
        <div className="group flex flex-col gap-4 bg-white p-10 rounded-3xl">
            <h2 className="text-4xl">{head}</h2>
            <p className="text-sm">{para}<br /> {para2}</p>
            <div className="flex border-b border-b-gray-300 py-4 flex-row justify-between">
                <p><span className="font-medium text-5xl">${price}</span>&nbsp; /month</p>
                <div className="group-hover:bg-red-500 bg-gray-300 p-3 rounded-full h-14 w-14 flex items-center justify-center">
                    <img className="h-8 w-auto" src={`${img}`}></img>
                </div>
            </div>
            <div>
                <Lists text="Mistakes To Avoid" />
                <Lists text="Winning for Your Startup" />
                <Lists text="Mistakes To Avoid" />
                <Lists text="Your Event, Your Memories" />
            </div>
            <button className="w-full cursor-pointer group-hover:bg-red-500 hover:text-white rounded-full bg-gray-200 py-4 font-semibold">
                GET STARTED NOW
            </button>
        </div>
    )
}

function Header() {
    return (
        <div className="bg-gray-800 py-6 px-16 rounded-b-2xl flex gap-10 justify-between items-center w-[90%] mx-auto">
            <img
                className=""
                src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png">

            </img>
            <div className="hidden md:block">
                <div className="flex  flex-row items-center font-bold gap-5">
                    <MenuItems text={"Home"} />
                    <MenuItems text={"About Us"} />
                    <MenuItems text={"Pages"} />
                    <MenuItems text={"Services"} />
                    <MenuItems text={"Shop"} />
                    <MenuItems text={"Blog"} />
                    <MenuItems text={"Contact"} />
                </div>
            </div>
            <div className=" hidden md:block">
                <div className="flex gap-3">
                    <SocialButtons link={"/facebook.png"} />
                    <SocialButtons link={"/instagram.png"} />
                    <SocialButtons link={"/twitter.png"} />
                    <SocialButtons link={"/pinterest.png"} />
                </div>
            </div>

            <button className="rounded-full">
                <img className="w-10 h-10" src="/circle.png"></img>
            </button>
        </div>
    )
}

function MenuItems({ text }) {
    return (
        <p className="text-white cursor-pointer hover:underline hover:text-red-500">
            {text}
        </p>
    )
}

function SocialButtons({ link }) {
    return (
        <div className="bg-white rounded-full w-10 h-10">
            <img className="h-10 w-10" src={link}></img>
        </div>
    )
}

function Main() {
    return (
        <div className="bg-black rounded-4xl dark:border border-white md:py-0 py-10">
            <Header />

            <div className="md:w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center md:h-[90vh]">
                <div>
                    <h1 className="text-2xl md:text-6xl font-md mx-4 md-mx-0 text-white">
                        Where Quality Is A
                        <br />
                        Service Meets The
                        <br />
                        <span className="text-red-500">Open Road</span>
                    </h1>
                    <p className="md:mt-10 mx-4 md-mx-0">
                        Car service is essential for maintaining the performance and
                        <br />
                        longevity of your vehicle. From oil changes Car service
                    </p>
                    <button className="border border-red-500 mx-4 md:mx-4 text-white font-bold md:mt-10 rounded-full px-5 py-3">
                        GET STARTED
                    </button>
                </div>
                <img
                    className="h-[400px] w-[400px] rounded-3xl"
                    src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-2.jpg">
                </img>
            </div>
            <div className="flex md:flex-row flex-col rounded-lg bg-white dark:bg-black dark:border border-white -mt-12 absolute w-[80vw] left-1/2 transform -translate-x-1/2 justify-around items-center shadow-md" >
                <Numbers number={"600+"} text={"Team Members"} />
                <Numbers number={"2k+"} text={"Service Complete"} />
                <Numbers number={"53+"} text={"Winning award"} />
                <Numbers number={"3k+"} text={"Client Review"} />
            </div>

        </div>
    )
}

function Numbers({ number, text }) {
    return (
        <div className="text-black dark:bg-black dark:text-white bg-white p-4">
            <h1 className="font-bold text-5xl">{number}</h1>
            <p>{text}</p>
        </div>
    )
}

function Services() {
    return (
        <div className="md:h-[90vh] rounded-4xl md:mt-30 mt-100 bg-white text-black py-10 dark:bg-black dark:border dark:text-white border-white">
            <p className="text-red-500 text-center font-bold text-sm">LATEST SERVICE</p>
            <h1 className="text-center text-2xl md:text-5xl font-bold my-4">
                Your Trusted Car Provider <br /> Keeping Your Vehicle
            </h1>
            <div className="flex md:flex-row flex-col w-[85%] gap-8  mx-auto items-center my-20">
                <ServiceCard image={"/broken-car.png"} head={"Transformation Advising"} desc={"Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service"} />
                <ServiceCard image={"/disc-brake.png"} head={"Easy Drive Maintenance"} desc={"Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service"} />
                <ServiceCard image={"/chassis.png"} head={"Elite Auto Services"} desc={"Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service"} />
            </div>
        </div>
    )
}

function ServiceCard({ image, head, desc }) {
    return (
        <div className="flex-1 flex flex-col items-center gap-4 border-2 rounded-lg p-4">
            <div style={{ background: "linear-gradient(0deg, rgba(145,12,12,1) 0%, rgba(15,0,110,1) 45%)" }} className="h-15 w-15 rounded-full flex items-center justify-center">
                <img className="h-10 w-10" src={image}></img>
            </div>
            <h2 className="font-bold text-lg">{head}</h2>
            <p className="text-center">{desc}</p>
        </div>
    )
}

function AboutUs() {
    return (
        <div className="py-20">
            <div className="pb-15 dark:text-white text-black w-[85%] mx-auto flex md:flex-row flex-col justify-between">
                <div>
                    <p className="text-red-500 font-bold text-sm">ABOUT US</p>
                    <h1 className="text-5xl font-bold my-4">
                        Fast and Reliable Car Care <br /> Your Car Our Priority
                    </h1>
                    <p className="my-4">
                        Car service is essential for maintaining the performance and <br />
                        longevity of your vehicle. From oil changes
                    </p>
                    <div className="">
                        <Lists text="Fast and Reliable Car Care Your Car Our Priority" />
                        <Lists text="Free with Our Services Care for Your Car" />
                        <Lists text="Top-notch Care for Your Vehicle Your Vehicle" />
                        <Lists text="Expert Service for Your Vehicle Drive Stress" />
                        <Lists text="Your Trusted Car Service Provider" />
                    </div>
                </div>
                <img
                    src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
                    className="h-[400px] w-[480px] rounded-3xl">
                </img>
            </div>
            <div className="bg-black dark:border border-white flex md:flex-row flex-col gap-10 py-10 px-10 md:justify-between w-[90%] rounded-lg mx-auto">
                <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-5.png"></img>
                <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-2.png"></img>
                <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-3.png"></img>
                <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-4.png"></img>
                <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-1.png"></img>
            </div>
        </div>

    )
}

function Lists({ text }) {
    return (
        <div className="flex my-2 items-center">
            <img src="/chevron.png" className="w-4 h-4 mr-3"></img>
            <p className="font-bold text-md">{text}</p>
        </div>
    )
}

function Gallery() {
    return (
        <div className="md:w-[85%] mx-auto py-20">
            <p className="text-red-500 font-bold text-sm mx-4 md:mx-0">LATEST GALLERY</p>
            <div className="flex md:flex-row flex-col justify-between mx-4 md:mx-0">
                <h1 className="text-5xl font-bold my-4">
                    Quality Service, Every Time <br /> Drive Safe Stay Secure
                </h1>
                <p className="my-4 self-end">
                    Car service is essential for maintaining the performance and  <br />
                    longevity of your vehicle. From oil changes
                </p>
            </div>
            <div className="flex flex-col gap-4 md:pt-20">
                <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
                    <img
                        className="rounded-lg w-90 h-80"
                        src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-1.jpg"
                    ></img>
                    <img
                        className="rounded-lg w-90 h-80"
                        src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-2.jpg"
                    ></img>
                    <img
                        className="rounded-lg w-90 h-80"
                        src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-6.jpg"
                    ></img>

                </div>
                <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
                    <img
                        className="rounded-lg w-90 h-80"
                        src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-3.jpg"
                    ></img>

                    <img
                        className="rounded-lg w-90 h-80"
                        src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-5.jpg"
                    ></img>
                    <img
                        className="rounded-lg w-90 h-80"
                        src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg"
                    ></img>
                </div>
            </div>
        </div>
    )
}

function Questions() {
    return (
        <div className="md:w-[85%] mx-auto py-10 dark:text-white">
            <p className="text-red-500 font-bold text-sm text-center">ASK QUESTION</p>
            <h1 className="text-5xl font-bold my-4 text-center">
                Got Questions? We've <br /> Got Answers
            </h1>
            <div className="py-10 mx-4 md:mx-0">
                <QuestionCard no={"01"} question={"What types of businesses do you support?"} />
                <QuestionCard no={"02"} question={"How do I track my vehicle?"} />
                <QuestionCard no={"03"} question={"What payment methods do you accept?"} />
                <QuestionCard no={"04"} question={"How often should I service my vehicle?"} />
            </div>

        </div>
    )
}

function QuestionCard({ no, question }) {
    return (
        <div className="flex dark:bg-black flex-row justify-between my-4 items-center bg-white py-4 px-8 border-2 rounded-xl">
            <p className="font-bold text-lg">{no}.  &nbsp; {question}</p>
            <div className="flex justify-center items-center bg-gray-200 self-end rounded-full p-3">
                <img className="h-2 w-2" src="/right-chevron.png">

                </img>

            </div>
        </div>
    )
}