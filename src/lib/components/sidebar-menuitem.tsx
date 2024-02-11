import { FC, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { BACKGROUND_ANIMATION_STYLE } from "../constants";

interface SidebarMenuItemProps {
  title: String;
  icon: React.ReactElement;
  isActive: boolean;
  onClick: VoidFunction;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  title,
  icon,
  isActive,
  onClick,
}: SidebarMenuItemProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <ListGroup.Item
      action
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={BACKGROUND_ANIMATION_STYLE}
      className={`${isActive ? "bg-warning" : "bg-primary"} text-white ${
        isHovered ? "bg-warning" : "bg-primary"
      }`}
    >
      <span>
        {icon}
        &nbsp;
        {title}
      </span>
    </ListGroup.Item>
  );
};

export default SidebarMenuItem;
