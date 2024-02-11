import { FC, useState } from "react";
import SidebarMenuItem from "./sidebar-menuitem";
import { ListGroup } from "react-bootstrap";

interface SidebarMenuProps {
  menuItems: MenuItem[];
}

const SidebarMenu: FC<SidebarMenuProps> = ({ menuItems }: SidebarMenuProps) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  return (
    <ListGroup>
      {menuItems.map((item, index) => (
        <SidebarMenuItem
          key={index}
          {...item}
          onClick={() => setActiveItemIndex(index)}
          isActive={activeItemIndex === index}
        />
      ))}
    </ListGroup>
  );
};

export default SidebarMenu;
