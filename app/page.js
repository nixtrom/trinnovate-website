import { getSortedPostsData } from "../lib/posts";
import Main from "./components/Main";

export default function Home() {

  const posts = getSortedPostsData();
  

  return (
    <main>
      <div className=" bg-[#ffffff] dark:bg-[#000000] md:px-10 px-5">
        <div className="w-full max-w-[100vw] flex flex-col justify-center align-center bg-black-400">
          <Main posts={posts} />
          {/* <CustomNavBar /> */}
          {/* <ResizeableNavbar /> */}
        </div>
      </div>
    </main>
  );
}
