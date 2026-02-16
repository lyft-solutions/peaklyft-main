import { headerMenu } from "@/utils/Header";
import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex items-center font-poppins gap-[53px] pl-[21px]">
      {headerMenu.map((item: any) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </nav>
  );
};

export default DesktopMenu;
