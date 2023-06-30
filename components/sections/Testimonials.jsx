import styles from "../../styles/style";

const Testimonials = () => (
  <section id="clients" className={`sm:py-16 py-6 flex justify-center items-center flex-col relative px-10`}>
    <div className=" w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
      What Entrepreneurs   <br className="sm:block hidden" /> say about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Testimonials from Entrepreneurs we have worked with:
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)} */}
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src="/quotes.svg" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    Team Tygar Decentralized is well equipped with the latest infrastructure and technology. The team is genuine and keeps the best interest of clients - A Top Priority!

    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        Harry Chibber        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        Partner, Tygar Law Corporate        </p>
      </div>
    </div>
  </div>
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src="/quotes.svg" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    100% Genuine team! I didn’t have to think twice before re-engaging team Tygar for my 3rd Startup.    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        Sukrit Batra        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        CEO, Sterlay
        </p>
      </div>
    </div>
  </div>
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src="/quotes.svg" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    Tygar Decentralized expertise and guidance transformed our Web3 project. Their strategic insights and seamless execution exceeded our expectations.
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        Rahul Kathuria   </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        Co-Founder & CEO, Eventify             </p>
      </div>
    </div>
  </div>
    </div>
  </section>
);

export default Testimonials;
