import {Icon} from "@iconify/react";

const Explore = () => {
    return <div className="flex flex-col p-20 mt-12 gap-20">
        <div>
            <div>
                <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-semibold tracking-wide text-gray-700 uppercase">Featured Posts</h3>
                    <div className="flex gap-12">
                        <Icon icon="iconoir:nav-arrow-left" fontSize='24' className="text-gray-700 opacity-20" />
                        <Icon icon="iconoir:nav-arrow-right" fontSize='24' className="text-gray-700" />
                    </div>
                </div>
                <div className="relative">
                    <div className="w-full mt-1 bg-gray-700 opacity-10" style={{ height: "3px" }}></div>
                    <div className="absolute top-0 left-0 w-10 h-full bg-yellow-700"></div>
                </div>
            </div>
            <div className="mt-6 grid gap-6" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                <div>
                    <img className="w-full h-64 object-fit" src="https://www.bakingbusiness.com/ext/resources/2019/2/StarbucksChina3_Lead.jpg?t=1550264729&width=900" />
                    <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase">miscellaneous</p>
                    <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase">WHY TEA BREAKS ARE SO IMPORTANT</h4>
                    <div className="flex items-center mt-4 gap-8">
                        <p className="font-semibold tracking-wide text-gray-700 opacity-30">23 Feb 2022, 3:03pm</p>
                        <p className="flex items-center font-semibold tracking-wide text-gray-700 opacity-30 gap-1">
                            1,500
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path strokeWidth="2.4" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path strokeWidth="2.4" d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>                        </p>
                    </div>
                </div>
                <div>
                    <img className="w-full h-64 object-fit" src="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ" />
                    <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase">programming</p>
                    <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase">TIPS FOR WRITING A BETTER & CLEANER CODE</h4>
                    <div className="flex items-center mt-4 gap-8">
                        <p className="font-semibold tracking-wide text-gray-700 opacity-30">23 Feb 2022, 3:03pm</p>
                        <p className="flex items-center font-semibold tracking-wide text-gray-700 opacity-30 gap-1">
                            1,500
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path strokeWidth="2.4" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path strokeWidth="2.4" d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>                        </p>
                    </div>
                </div>
                <div>
                    <img className="w-full h-64 object-fit" src="https://www.melanginn.com.my/wp-content/uploads/2021/04/Is-now-a-good-time-to-look-for-a-job-HERC.jpg" />
                    <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase">my thoughts</p>
                    <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase">MY THOUGHTS ABOUT THE JOB MARKETS</h4>
                    <div className="flex items-center mt-4 gap-8">
                        <p className="font-semibold tracking-wide text-gray-700 opacity-30">23 Feb 2022, 3:03pm</p>
                        <p className="flex items-center font-semibold tracking-wide text-gray-700 opacity-30 gap-1">
                            1,500
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path strokeWidth="2.4" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path strokeWidth="2.4" d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-semibold tracking-wide text-gray-700 uppercase">Featured Posts</h3>
                    <div className="flex gap-12">
                        <Icon icon="iconoir:nav-arrow-left" fontSize='24' className="text-gray-700 opacity-20" />
                        <Icon icon="iconoir:nav-arrow-right" fontSize='24' className="text-gray-700" />
                    </div>
                </div>
                <div className="relative">
                    <div className="w-full mt-1 bg-gray-700 opacity-10" style={{ height: "3px" }}></div>
                    <div className="absolute top-0 left-0 w-10 h-full bg-yellow-700"></div>
                </div>
            </div>
            <div className="mt-6 grid gap-6" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
                <div>
                    <img className="w-full h-64 object-fit" src="https://www.bakingbusiness.com/ext/resources/2019/2/StarbucksChina3_Lead.jpg?t=1550264729&width=900" />
                    <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase">miscellaneous</p>
                    <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase">WHY TEA BREAKS ARE SO IMPORTANT</h4>
                    <div className="flex items-center mt-4 gap-8">
                        <p className="font-semibold tracking-wide text-gray-700 opacity-30">23 Feb 2022, 3:03pm</p>
                        <p className="flex items-center font-semibold tracking-wide text-gray-700 opacity-30 gap-1">
                            1,500
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path strokeWidth="2.4" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path strokeWidth="2.4" d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>                        </p>
                    </div>
                </div>
                <div>
                    <img className="w-full h-64 object-fit" src="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ" />
                    <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase">programming</p>
                    <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase">TIPS FOR WRITING A BETTER & CLEANER CODE</h4>
                    <div className="flex items-center mt-4 gap-8">
                        <p className="font-semibold tracking-wide text-gray-700 opacity-30">23 Feb 2022, 3:03pm</p>
                        <p className="flex items-center font-semibold tracking-wide text-gray-700 opacity-30 gap-1">
                            1,500
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path strokeWidth="2.4" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path strokeWidth="2.4" d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>                        </p>
                    </div>
                </div>
                <div>
                    <img className="w-full h-64 object-fit" src="https://www.melanginn.com.my/wp-content/uploads/2021/04/Is-now-a-good-time-to-look-for-a-job-HERC.jpg" />
                    <p className="mt-3 font-semibold tracking-wider text-yellow-700 uppercase">my thoughts</p>
                    <h4 className="mt-1 text-3xl font-medium tracking-wide text-gray-700 uppercase">MY THOUGHTS ABOUT THE JOB MARKETS</h4>
                    <div className="flex items-center mt-4 gap-8">
                        <p className="font-semibold tracking-wide text-gray-700 opacity-30">23 Feb 2022, 3:03pm</p>
                        <p className="flex items-center font-semibold tracking-wide text-gray-700 opacity-30 gap-1">
                            1,500
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g stroke-width="1.5" fill="none"><path strokeWidth="2.4" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path strokeWidth="2.4" d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></g></svg>                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>;
}

export default Explore;
