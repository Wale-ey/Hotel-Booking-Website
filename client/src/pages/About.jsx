import { assets } from "./../assets/assets";
import Title from "../components/Title";
import roomImg1 from "../assets/roomImg1.png";
import roomImg2 from "../assets/roomImg2.png";

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-28 md:pt-35 max-md:px-4 pb-25">
        <div className="hidden items-center justify-center relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0 h-auto lg:block">
          <img
            className="max-w-md w-full h-130 object-cover rounded-2xl "
            src={roomImg1}
            alt="room image1"
          />
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <Title
            title="What we do"
            subTitle="At Quickstay, we believe every stay should feel like a perfect blend of comfort, style, and genuine hospitality. Nestled in the heart of [City/Location], our hotel offers a welcoming escape for travelers seeking relaxation, convenience, and memorable experiences.

            From the moment you arrive, our dedicated team is here to ensure you feel at home. Whether you're here for business, leisure, or a special occasion, we provide thoughtfully designed rooms, modern amenities, and personalized services tailored to your needs.

            Beyond our doors, you'll find easy access to [local attractions, landmarks, or scenery], making us the ideal starting point to explore the beauty and culture of [City/Region]. Inside, enjoy [highlight amenities like spa, rooftop bar, restaurant, pool, or conference facilities], all crafted to enhance your stay.

            At Quickstay, it's not just about where you stay-it's about how you feel. With warmth, care, and attention to detail, we make every moment unforgettable."
          />

          <button className="flex items-center justify-center gap-2 group bg-black px-4 mt-5 md:px-7 py-3 rounded active:scale-95 transition-all">
            <span className="text-emerald-50">Read More</span>
            <img
              className="w-3.5 invert group-hover:translate-x-1 transition-all"
              src={assets.arrowIcon}
              alt="arrow-Icon"
            />
          </button>
        </div>
      </div>
      <div className="bg-[#f6f9fc] flex flex-col items-center text-center py-5">
        <Title
          title="Meet Our People"
          subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text."
        />
        <div className="flex flex-wrap gap-6 items-center justify-center mt-5">
          <div className="flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:shadow-sm hover:shadow-gray-500 transition">
            <img
              className="w-24 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="userImage1"
            />
            <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">
              Donald Jackman
            </h2>
            <p className="text-gray-500 group-hover:text-white/80">
              Content Creator
            </p>
            <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.882 0H1.167A1.16 1.16 0 0 0 0 1.161V14.84C0 15.459.519 16 1.167 16H14.83a1.16 1.16 0 0 0 1.166-1.161V1.135C16.048.516 15.53 0 14.882 0M4.744 13.6H2.385V5.987h2.36zM3.552 4.929c-.778 0-1.374-.62-1.374-1.368a1.38 1.38 0 0 1 1.374-1.367 1.38 1.38 0 0 1 1.374 1.367c0 .749-.57 1.368-1.374 1.368M11.33 13.6V9.91c0-.878-.026-2.039-1.245-2.039-1.244 0-1.426.98-1.426 1.961V13.6H6.3V5.987h2.307v1.058h.026c.337-.62 1.09-1.239 2.256-1.239 2.411 0 2.852 1.549 2.852 3.665V13.6z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.85 2.85 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.85 2.85 0 0 0 2.63 2.547v1.78"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.358 2.613 1.128-1.425c.326-.386.416-.683.445-.832-.89.535-1.722.713-2.256.713h-.208L15.348.95A3.83 3.83 0 0 0 12.795 0c-2.078 0-3.71 1.722-3.71 3.71 0 .12 0 .298.03.417l.088.593-.623-.03C4.78 4.573 1.663 1.307 1.158.743c-.831 1.485-.356 2.91.148 3.8l1.01 1.663-1.603-.89q.044 1.87 1.425 2.938l.801.594-.801.326c.504 1.515 1.632 2.138 2.464 2.375l1.098.297-1.04.713C2.999 13.745.92 13.656 0 13.568c1.87 1.305 4.097 1.602 5.64 1.602 1.158 0 2.02-.118 2.227-.207 8.313-1.96 8.699-9.382 8.699-10.866v-.208l.178-.119c1.01-.95 1.425-1.454 1.662-1.751-.089.03-.208.089-.326.119z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:shadow-sm hover:shadow-gray-500 transition">
            <img
              className="w-24 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="userImage2"
            />
            <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">
              Richard Nelson
            </h2>
            <p className="text-gray-500 group-hover:text-white/80">
              Content Writer
            </p>
            <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.882 0H1.167A1.16 1.16 0 0 0 0 1.161V14.84C0 15.459.519 16 1.167 16H14.83a1.16 1.16 0 0 0 1.166-1.161V1.135C16.048.516 15.53 0 14.882 0M4.744 13.6H2.385V5.987h2.36zM3.552 4.929c-.778 0-1.374-.62-1.374-1.368a1.38 1.38 0 0 1 1.374-1.367 1.38 1.38 0 0 1 1.374 1.367c0 .749-.57 1.368-1.374 1.368M11.33 13.6V9.91c0-.878-.026-2.039-1.245-2.039-1.244 0-1.426.98-1.426 1.961V13.6H6.3V5.987h2.307v1.058h.026c.337-.62 1.09-1.239 2.256-1.239 2.411 0 2.852 1.549 2.852 3.665V13.6z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.85 2.85 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.85 2.85 0 0 0 2.63 2.547v1.78"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.358 2.613 1.128-1.425c.326-.386.416-.683.445-.832-.89.535-1.722.713-2.256.713h-.208L15.348.95A3.83 3.83 0 0 0 12.795 0c-2.078 0-3.71 1.722-3.71 3.71 0 .12 0 .298.03.417l.088.593-.623-.03C4.78 4.573 1.663 1.307 1.158.743c-.831 1.485-.356 2.91.148 3.8l1.01 1.663-1.603-.89q.044 1.87 1.425 2.938l.801.594-.801.326c.504 1.515 1.632 2.138 2.464 2.375l1.098.297-1.04.713C2.999 13.745.92 13.656 0 13.568c1.87 1.305 4.097 1.602 5.64 1.602 1.158 0 2.02-.118 2.227-.207 8.313-1.96 8.699-9.382 8.699-10.866v-.208l.178-.119c1.01-.95 1.425-1.454 1.662-1.751-.089.03-.208.089-.326.119z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:shadow-sm hover:shadow-gray-500 transition">
            <img
              className="w-24 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="userImage3"
            />
            <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">
              James Washington
            </h2>
            <p className="text-gray-500 group-hover:text-white/80">
              Content Marketing
            </p>
            <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.882 0H1.167A1.16 1.16 0 0 0 0 1.161V14.84C0 15.459.519 16 1.167 16H14.83a1.16 1.16 0 0 0 1.166-1.161V1.135C16.048.516 15.53 0 14.882 0M4.744 13.6H2.385V5.987h2.36zM3.552 4.929c-.778 0-1.374-.62-1.374-1.368a1.38 1.38 0 0 1 1.374-1.367 1.38 1.38 0 0 1 1.374 1.367c0 .749-.57 1.368-1.374 1.368M11.33 13.6V9.91c0-.878-.026-2.039-1.245-2.039-1.244 0-1.426.98-1.426 1.961V13.6H6.3V5.987h2.307v1.058h.026c.337-.62 1.09-1.239 2.256-1.239 2.411 0 2.852 1.549 2.852 3.665V13.6z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.85 2.85 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.85 2.85 0 0 0 2.63 2.547v1.78"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.358 2.613 1.128-1.425c.326-.386.416-.683.445-.832-.89.535-1.722.713-2.256.713h-.208L15.348.95A3.83 3.83 0 0 0 12.795 0c-2.078 0-3.71 1.722-3.71 3.71 0 .12 0 .298.03.417l.088.593-.623-.03C4.78 4.573 1.663 1.307 1.158.743c-.831 1.485-.356 2.91.148 3.8l1.01 1.663-1.603-.89q.044 1.87 1.425 2.938l.801.594-.801.326c.504 1.515 1.632 2.138 2.464 2.375l1.098.297-1.04.713C2.999 13.745.92 13.656 0 13.568c1.87 1.305 4.097 1.602 5.64 1.602 1.158 0 2.02-.118 2.227-.207 8.313-1.96 8.699-9.382 8.699-10.866v-.208l.178-.119c1.01-.95 1.425-1.454 1.662-1.751-.089.03-.208.089-.326.119z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:shadow-sm hover:shadow-gray-500 transition">
            <img
              className="w-24 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="userImage1"
            />
            <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">
              Donald Jackman
            </h2>
            <p className="text-gray-500 group-hover:text-white/80">
              Content Creator
            </p>
            <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.882 0H1.167A1.16 1.16 0 0 0 0 1.161V14.84C0 15.459.519 16 1.167 16H14.83a1.16 1.16 0 0 0 1.166-1.161V1.135C16.048.516 15.53 0 14.882 0M4.744 13.6H2.385V5.987h2.36zM3.552 4.929c-.778 0-1.374-.62-1.374-1.368a1.38 1.38 0 0 1 1.374-1.367 1.38 1.38 0 0 1 1.374 1.367c0 .749-.57 1.368-1.374 1.368M11.33 13.6V9.91c0-.878-.026-2.039-1.245-2.039-1.244 0-1.426.98-1.426 1.961V13.6H6.3V5.987h2.307v1.058h.026c.337-.62 1.09-1.239 2.256-1.239 2.411 0 2.852 1.549 2.852 3.665V13.6z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.85 2.85 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.85 2.85 0 0 0 2.63 2.547v1.78"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m16.358 2.613 1.128-1.425c.326-.386.416-.683.445-.832-.89.535-1.722.713-2.256.713h-.208L15.348.95A3.83 3.83 0 0 0 12.795 0c-2.078 0-3.71 1.722-3.71 3.71 0 .12 0 .298.03.417l.088.593-.623-.03C4.78 4.573 1.663 1.307 1.158.743c-.831 1.485-.356 2.91.148 3.8l1.01 1.663-1.603-.89q.044 1.87 1.425 2.938l.801.594-.801.326c.504 1.515 1.632 2.138 2.464 2.375l1.098.297-1.04.713C2.999 13.745.92 13.656 0 13.568c1.87 1.305 4.097 1.602 5.64 1.602 1.158 0 2.02-.118 2.227-.207 8.313-1.96 8.699-9.382 8.699-10.866v-.208l.178-.119c1.01-.95 1.425-1.454 1.662-1.751-.089.03-.208.089-.326.119z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-28 md:pt-35 max-md:px-4 pb-25">
        <form className="flex flex-col items-center text-sm mt-10">
          <Title
            title="Get in touch with us"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum has been the industry's standard dummy text."
          />

          <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px] mt-5">
            <div className="w-full">
              <label className="text-black/70" htmlFor="name">
                Your Name
              </label>
              <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                type="text"
                placeholder="Yeboah Enock"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-black/70" htmlFor="name">
                Your Email
              </label>
              <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                type="email"
                placeholder="enockkojoyeboah05@gmail.com"
                required
              />
            </div>
          </div>

          <div className="mt-6 w-[350px] md:w-[700px]">
            <label className="text-black/70" htmlFor="name">
              Message
            </label>
            <textarea
              className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
              placeholder="Type message here"
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center text-white justify-center gap-2 group bg-black px-4 mt-7 md:px-7 py-3 rounded active:scale-95 transition-all"
          >
            Send Message
          </button>
        </form>
        <div className="flex items-center justify-center relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0 h-auto">
          <img
            className="max-w-md w-full h-130 object-cover rounded-2xl hidden lg:block"
            src={roomImg2}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
