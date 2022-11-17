import { useRouter } from "next/router";

type Page = "schedule";

const Navbar = () => {
  const router = useRouter();

  const page = router.asPath.split("/").at(-1) as Page;

  return <div></div>;
};

export default Navbar;
