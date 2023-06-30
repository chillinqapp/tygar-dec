import styles from "../../styles/style";

const Testimonials = () => (
  <section id="clients" className={`sm:py-16 py-6 flex justify-center items-center flex-col relative px-10`}>
    <div className=" w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {/* {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)} */}
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src="/quotes.svg" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        Sukrit Batra
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        Founder & Leader
        </p>
      </div>
    </div>
  </div>
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src="/quotes.svg" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        Gaurav Tyagi
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        Senior Partner, Tygar Law Corporate
        </p>
      </div>
    </div>
  </div>
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src="/quotes.svg" alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        Siddhant Pandey
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        Founder, Law Briefcase
        </p>
      </div>
    </div>
  </div>
    </div>
  </section>
);

export default Testimonials;
