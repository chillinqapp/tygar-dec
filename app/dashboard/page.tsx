import Image from "next/image"
import { Button } from "../../components/button"
const page = () => {
  return (
    <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
      <div className="pt-[6.4rem] px-12 m-15 items-center justify-center">
      {/* <Image src="/user.jpg"
                alt="team"
                height={60}
                width={60}
                className="flex-shrink-0 rounded-3xl w-60 h-60 object-cover object-center sm:mb-0 mb-4"
              />
          <div className="flex-grow ml-[100px]  ">
                <h4 className="title-font text-lg text-white">
                  Rahul Kathuria
                </h4>
                <br />
                <h6 className="title-font text-lg text-white">
                  rahulkathuria008@gmail.com
                </h6>
                </div> */}
                      <div className="lg:w-1/2 w-full leading-relaxed text-white ">
            <div className="h-full flex items-center sm:justify-center justify-center text-center sm:text-left">
              <Image
                src="/user.jpg"
                alt="team"
                height={60}
                width={60}
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              />
              <div className="flex-grow sm:pl-8 ">
                {/* <h2 className="title-font font-medium text-lg text-white">
                  Rahul Kathuria
                </h2> */}
                <h2 className="title-font font-medium text-lg text-white">
                  rahulkathuria008@gmail.com
                </h2>
                <h3 className="text-gray-500 font-medium b-3">0x2970016580aCe251cDC15de5B29d3F13f77d19aC

</h3>
                <p className="mb-4">Logged in</p>
                {/* <button onClick={click}>debug</button> */}
              
              </div>
            </div>
          </div>
                <p className="mt-9 border-b border-transparent-white backdrop-blur-[12px]"></p>
                
      <div className=" mt-4 px-[250px] mx-[200px]">
        <h1 className="  text-3xl font-semibold items-center justify-center ">My Tickets</h1>
        <p className="mt-12 text-md">No Tickets present</p>
        <button className="mt-6 ml-[-90px] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] px-14 py-2 text-base text-[18px] text-white shadow-sm hover:bg-indigo-700 font-semibold">Purchase your first ticket</button> 


      </div>
      </div>
    </div>
  )
}

export default page
