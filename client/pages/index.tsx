import type { NextPage } from "next";

// Components
import Header from "../components/Header";

const style = {
  wrapper: `h-screen max-h-screen min-h-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between`,
};

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <h2>Main</h2>
      <h2>TransactionHistiory</h2>
    </div>
  );
};

export default Home;
