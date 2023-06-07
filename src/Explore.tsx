import { Icon } from "@iconify/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

const scrollLeft = (e: number) => {
  const section = document.getElementById("sec" + e);
  if (section) {
    section.scrollLeft -= section.clientWidth;
  }
};

const scrollRight = (e: number) => {
  const section = document.getElementById("sec" + e);
  if (section) {
    section.scrollLeft += section.clientWidth;
  }
};

const Explore = () => {
  return (
    <div className="flex flex-col p-20 mt-12 gap-12">
      <div>
        <div>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-xl font-semibold tracking-wide text-gray-700 uppercase animate__animated animate__fadeInLeft">
              Featured Posts
            </h3>
            <div className="flex gap-12">
              <button onClick={() => scrollLeft(0)}>
                <Icon
                  icon="iconoir:nav-arrow-left"
                  fontSize="24"
                  className="text-gray-700 opacity-20 animate__animated animate__fadeInRight"
                />
              </button>
              <button onClick={() => scrollRight(0)}>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  fontSize="24"
                  className="text-gray-700 animate__animated animate__fadeInLeft"
                />
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full mt-1 bg-gray-700 opacity-10 animate__animated animate__slideInRight"
              style={{ height: "3px" }}
            ></div>
            <div className="absolute top-0 left-0 w-10 h-full bg-yellow-700 animate__animated animate__fadeInLeft"></div>
          </div>
        </div>
        <div
          className="flex pb-8 mt-6 overflow-x-scroll gap-6 scroll-smooth"
          id="sec0"
        >
          {Array(12)
            .fill(0)
            .map(() => (
              <div className="flex-shrink-0 w-96">
                <div className="w-full animate__animated animate__fadeIn">
                  <LazyLoadImage
                    effect="black-and-white"
                    className="w-full h-64 object-fit"
                    width="100%"
                    src="https://www.bakingbusiness.com/ext/resources/2019/2/StarbucksChina3_Lead.jpg?t=1550264729&width=400"
                    placeholderSrc="https://via.placeholder.com/300/E0E0E0?text=CODEBLOG"
                  />
                </div>
                <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase animate__animated animate__fadeInUp">
                  miscellaneous
                </p>
                <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase animate__animated animate__fadeInUp">
                  WHY TEA BREAKS ARE SO IMPORTANT
                </h4>
                <div className="flex items-center mt-4 gap-8">
                  <p className="font-semibold tracking-wide text-gray-500 animate__animated animate__fadeInLeft">
                    23 Feb 2022, 3:03pm
                  </p>
                  <p className="flex items-center font-semibold tracking-wide text-gray-500 gap-1 animate__animated animate__fadeInRight">
                    1,500
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1.2em"
                      height="1.2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="1.5" fill="none">
                        <path
                          strokeWidth="2.4"
                          d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          strokeWidth="2.4"
                          d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>{" "}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-xl font-semibold tracking-wide text-gray-700 uppercase animate__animated animate__fadeInLeft">
              Most Popular
            </h3>
            <div className="flex gap-12">
              <button onClick={() => scrollLeft(1)}>
                <Icon
                  icon="iconoir:nav-arrow-left"
                  fontSize="24"
                  className="text-gray-700 opacity-20 animate__animated animate__fadeInRight"
                />
              </button>
              <button onClick={() => scrollRight(1)}>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  fontSize="24"
                  className="text-gray-700 animate__animated animate__fadeInLeft"
                />
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full mt-1 bg-gray-700 opacity-10 animate__animated animate__slideInRight"
              style={{ height: "3px" }}
            ></div>
            <div className="absolute top-0 left-0 w-10 h-full bg-yellow-700 animate__animated animate__fadeInLeft"></div>
          </div>
        </div>
        <div
          className="flex pb-8 mt-6 overflow-x-scroll gap-6 scroll-smooth"
          id="sec1"
        >
          {Array(12)
            .fill(0)
            .map(() => (
              <div className="flex-shrink-0 w-96">
                <div className="w-full animate__animated animate__fadeIn">
                  <LazyLoadImage
                    effect="black-and-white"
                    className="w-full h-64 object-fit"
                    width="100%"
                    src="https://www.bakingbusiness.com/ext/resources/2019/2/StarbucksChina3_Lead.jpg?t=1550264729&width=400"
                  />
                </div>
                <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase animate__animated animate__fadeInUp">
                  miscellaneous
                </p>
                <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase animate__animated animate__fadeInUp">
                  WHY TEA BREAKS ARE SO IMPORTANT
                </h4>
                <div className="flex items-center mt-4 gap-8">
                  <p className="font-semibold tracking-wide text-gray-500 animate__animated animate__fadeInLeft">
                    23 Feb 2022, 3:03pm
                  </p>
                  <p className="flex items-center font-semibold tracking-wide text-gray-500 gap-1 animate__animated animate__fadeInRight">
                    1,500
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1.2em"
                      height="1.2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="1.5" fill="none">
                        <path
                          strokeWidth="2.4"
                          d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          strokeWidth="2.4"
                          d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>{" "}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-between w-full">
            <h3 className="text-xl font-semibold tracking-wide text-gray-700 uppercase animate__animated animate__fadeInLeft">
              Most Recent
            </h3>
            <div className="flex gap-12">
              <button onClick={() => scrollLeft(2)}>
                <Icon
                  icon="iconoir:nav-arrow-left"
                  fontSize="24"
                  className="text-gray-700 opacity-20 animate__animated animate__fadeInRight"
                />
              </button>
              <button onClick={() => scrollRight(2)}>
                <Icon
                  icon="iconoir:nav-arrow-right"
                  fontSize="24"
                  className="text-gray-700 animate__animated animate__fadeInLeft"
                />
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full mt-1 bg-gray-700 opacity-10 animate__animated animate__slideInRight"
              style={{ height: "3px" }}
            ></div>
            <div className="absolute top-0 left-0 w-10 h-full bg-yellow-700 animate__animated animate__fadeInLeft"></div>
          </div>
        </div>
        <div
          className="flex pb-8 mt-6 overflow-x-scroll gap-6 scroll-smooth"
          id="sec2"
        >
          {Array(12)
            .fill(0)
            .map(() => (
              <div className="flex-shrink-0 w-96">
                <div className="w-full animate__animated animate__fadeIn">
                  <LazyLoadImage
                    effect="black-and-white"
                    className="w-full h-64 object-fit"
                    width="100%"
                    src="https://www.bakingbusiness.com/ext/resources/2019/2/StarbucksChina3_Lead.jpg?t=1550264729&width=400"
                  />
                </div>
                <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase animate__animated animate__fadeInUp">
                  miscellaneous
                </p>
                <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase animate__animated animate__fadeInUp">
                  WHY TEA BREAKS ARE SO IMPORTANT
                </h4>
                <div className="flex items-center mt-4 gap-8">
                  <p className="font-semibold tracking-wide text-gray-500 animate__animated animate__fadeInLeft">
                    23 Feb 2022, 3:03pm
                  </p>
                  <p className="flex items-center font-semibold tracking-wide text-gray-500 gap-1 animate__animated animate__fadeInRight">
                    1,500
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1.2em"
                      height="1.2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g stroke-width="1.5" fill="none">
                        <path
                          strokeWidth="2.4"
                          d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          strokeWidth="2.4"
                          d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>{" "}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
