const Contack = () => {
  return (
    <div className="w-11/12 mx-auto lg:flex gap-5 justify-between flex-row-reverse mb-20">
      <div className="lg:w-[50%]">
        <h1 className="text-xl md:text-2xl dark:text-white text-black py-4 text-center md:text-left">
          We are not just a job board we are a career partner
        </h1>
        <p className="text-black dark:text-white text-lg text-center md:text-left">
          Career Pulse provides a user-friendly job search feature that allows
          job seekers to search for positions by keywords, location, job type,
          industry, and more. This enables users to find jobs that match their
          preferences and qualifications.
        </p>
        <div className="py-2 md:py-5">
          <div className="flex gap-5 text-2xl dark:bg-[#2A323C] dark:text-white font-medium p-2 border-l-2 border-b-2 border-r-2 border-orange-500 dark:border-white mb-5 rounded-lg shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiuUl0zgJlIssTkJ4lkGyPccolvuW05sBNw&usqp=CAU"
              className="w-[30px]"
            />
            <h1>Web development</h1>
          </div>
          <div className="flex gap-5 text-2xl dark:bg-[#2A323C] dark:text-white font-medium p-2 border-l-2 border-b-2 border-r-2 border-orange-500 dark:border-white mb-5 rounded-lg shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUdmS1COqRxkzPhOi-qzzdchnRvmUsTccsQ&usqp=CAU"
              alt=""
              className="w-[50px]"
            />
            <h1>Digital marketing, </h1>
          </div>
          <div className="flex gap-5 text-2xl dark:bg-[#2A323C] dark:text-white font-medium p-2 border-l-2 border-b-2 border-r-2 border-orange-500 dark:border-white  mb-5 rounded-lg shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVDaO1Fu2fb-GpBmqmMNUhFn_cqWWZqDdreQ&usqp=CAU"
              alt=""
              className="w-[50px]"
            />
            <h1>Graphics design</h1>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/modern-businesswoman-with-clipboard-outdoors_23-2148002240.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.65583452.1699424830&semt=ais"
          alt="" className="rounded-xl w-full h-full"
        />
      </div>
    </div>
  );
};

export default Contack;
