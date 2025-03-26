import RoughAnnotation from "./RoughAnnotation";
import headerimg from "../assets/headerimg.jpg";
const Header = () => {
  return (
    <section className="flex flex-col md:flex-row sm:gap-2 gap-8 justify-between pt-8">
      <div className="flex flex-col px-8 mt-12 gap-4 items-center">
        <h2 className="text-center md:text-5xl text-4xl font-medium">
          Find Your <br />
          <span className="text-white">
            <RoughAnnotation
              text="Dream House"
              type="highlight"
              color="#15803d"
            />
          </span>
        </h2>
        <p className="max-w-xs lg:max-w-sm text-center md:text-sm lg:text-base text-dark">
          Rent out your home stress-free, quickly and reliably with our
          end-to-end full management support; earn more compared to long-term
          rentals.
        </p>
        <a href="/all-houses">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            See More Houses <span aria-hidden="true">&rarr;</span>
          </button>
        </a>

        <div className="flex gap-3 flex-wrap justify-center">
          <p className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-xs lg:text-base">Earn Money</span>
          </p>
          <p className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-xs lg:text-base">Rental Income</span>
          </p>
          <p className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span className="text-xs lg:text-base">Long-term rental</span>
          </p>
        </div>
      </div>
      <div className="px-4">
        <img
          src={headerimg}
          className="rounded-3xl h-72 md:h-80 w-full lg:w-[35rem] lg:h-[25rem] xl:w-[40rem] xl:h-[25rem] object-cover"
          alt="home image"
        />
      </div>
      <hr className="border-t border-gray-300 my-4 mx-5" />
    </section>
  );
};

export default Header;
