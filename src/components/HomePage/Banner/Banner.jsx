import userImg from "./../../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="bg-linear-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-20 items-center justify-between pt-10">
          <div className="space-y-7 w-full lg:max-w-lg mb-10 lg:mb-0">
            <h1 className="text-3xl lg:text-7xl font-extrabold text-dark01 text-center lg:text-left leading-tight">
              One Step Closer To Your{" "}
              <span className="text-linear">Dream Job</span>
            </h1>
            <p className="text-lg font-medium text-dark03">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="text-center lg:text-left ">
              <button className="btn">Get Started</button>
            </div>
          </div>
          <div>
            <img src={userImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
