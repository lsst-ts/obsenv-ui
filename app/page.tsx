import Image from "next/image";

import PackageTable from "./ui/package-table";

const Home = () => {
  return (
    <main>
      <h1 className="pl-4 pb-3 pt-1 text-2xl">Rubin Observatory Environment Management</h1>
      <PackageTable/>
    </main>
  );
}

export default Home;
