import { IconArrowRightBar } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Posts({ posts }) {
  const blogBg = [
    "/images/bg/first-blog-landscape.svg",
    "/images/bg/second-blog-bg.svg",
    "/images/bg/third-blog-bg.svg",
    "/images/bg/fourth-blog-bg.svg",
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className={`block bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 ${
              index === 0 ? "sm:col-span-2 lg:col-span-3" : ""
            }`}
            style={{
              backgroundImage: blogBg[index] ? `url(${blogBg[index]})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="realtive h-full flex flex-col gap-10 ">
              <div className="relative">
                <Image
               src="/images/trinnovate-symbol-white.svg"
               width={28}
               height={28}
               className="absolute right-0"
               alt="Trinnovate Logo"
             />

                <p className="text-white text-3xl font-semibold max-w-xs mb-8">
                  {post.title}
                </p>
                <p className="text-white text-lg font-normal max-w-md">
                  {post.description}
                </p>
              </div>
              <button
                type="button"
                class=" cursor-pointer text-white bg-black focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:bg-black/20  dark:focus:ring-blue-800 dark:border dark:border-white backdrop-blur-md w-fit"
              >
                Read More
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
    // <div className="flex flex-col gap-4 p-4 border border-neutral-900 rounded-xl w-full md:max-w-[80%] mx-auto">
    //   <div
    //     className="w-full h-96 rounded-md bg-cover bg-center p-4"
    //     style={{
    //       backgroundImage: "url('/images/bg/first-blog-landscape.svg')",
    //     }}
    //   >
    //     <div className="h-full flex flex-col gap-10 ">
    //       <div>
    //         <Image
    //           src="/images/trinnovate-full-white.svg"
    //           width={156}
    //           height={28}
    //           className="mb-10"
    //           alt="Trinnovate Logo"
    //         />
    //         <p className="text-white text-lg font-normal max-w-md">
    //           Humanoid robots are machines designed to resemble and interact
    //           with humans, often used in research, healthcare and entertainment
    //         </p>
    //       </div>
    //       <button
    //         type="button"
    //         class="cursor-pointer text-white bg-black focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:bg-black/20  dark:focus:ring-blue-800 dark:border dark:border-white backdrop-blur-md w-fit"
    //       >
    //         Read More
    //         <svg
    //           class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>

    //   <div className=" flex flex-col md:flex-row  w-full gap-4  rounded-md">
    //     <div
    //       className="flex-1 h-80 bg-cover bg-center rounded-md p-6"
    //       style={{ backgroundImage: "url('/images/bg/second-blog-bg.svg')" }}
    //     >
    //       <div className="h-full flex flex-col gap-10 justify-between">
    //         <div>
    //           <Image
    //             src="/images/trinnovate-full-white.svg"
    //             width={156}
    //             height={28}
    //             className="mb-10"
    //             alt="Trinnovate Logo"
    //           />
    //           <p className="text-white text-lg font-normal">
    //             Humanoid robots are machines designed to resemble and interact
    //             with humans, often used in research, healthcare and
    //             entertainment
    //           </p>
    //         </div>
    //         <div className="flex flex-row gap-2 items-center">
    //           <button className="text-xl text-white cursor-pointer w-fit">
    //             Read More
    //           </button>
    //           <IconArrowRightBar />
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="flex-1 h-80 bg-cover bg-center rounded-md p-6"
    //       style={{ backgroundImage: "url('/images/bg/third-blog-bg.svg')" }}
    //     >
    //       <div className="h-full flex flex-col gap-10 justify-between">
    //         <div>
    //           <Image
    //             src="/images/trinnovate-full-white.svg"
    //             width={156}
    //             height={28}
    //             className="mb-10"
    //             alt="Trinnovate Logo"
    //           />
    //           <p className="text-white text-lg font-normal">
    //             Humanoid robots are machines designed to resemble and interact
    //             with humans, often used in research, healthcare and
    //             entertainment
    //           </p>
    //         </div>
    //         <div className="flex flex-row gap-2 items-center">
    //           <button className="text-xl text-white cursor-pointer w-fit">
    //             Read More
    //           </button>
    //           <IconArrowRightBar />
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="flex-1 h-80 bg-cover bg-center rounded-md p-6"
    //       style={{ backgroundImage: "url('/images/bg/fourth-blog-bg.svg')" }}
    //     >
    //       <div className="h-full flex flex-col gap-10 justify-between">
    //         <div className="relative">
    //           {/* <Image
    //             src="/images/trinnovate-full-white.svg"
    //             width={156}
    //             height={28}
    //             className="absolute right-0"
    //             alt="Trinnovate Logo"
    //           /> */}
    //            <p className="text-white text-3xl font-semibold mb-4">
    //             Need for Indegenous Products in India
    //           </p>
    //           <p className="text-white text-lg font-normal">
    //             Humanoid robots are machines designed to resemble and interact
    //             with humans, often used in research, healthcare and
    //             entertainment
    //           </p>
    //         </div>
    //         <div className="flex flex-row gap-2 items-center">
    //           <button className="text-xl text-white cursor-pointer w-fit">
    //             Read More
    //           </button>
    //           <IconArrowRightBar />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
