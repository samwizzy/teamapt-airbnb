import { FaAirbnb, FaRaspberryPi, FaSwimmingPool, FaSkiing } from "react-icons/fa";
import { HiOutlineHomeModern, HiOutlineBuildingLibrary } from "react-icons/hi2";
import { TbToolsKitchen2, TbTrees, TbBeach, TbHanger2 } from "react-icons/tb";
import { MdOutlineAgriculture, MdOutlineCastle, MdKitesurfing } from "react-icons/md";
import { BiLandscape } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";

type LinkType = {
  id: number;
  name: string;
  icon: React.ReactNode;
  path?: string;
};

const links: LinkType[] = [
  { id: 1, name: "All Homes", icon: <FaAirbnb /> },
  { id: 2, name: "Amazing Views", icon: <GrOverview /> },
  { id: 3, name: "Tiny Homes", icon: <HiOutlineHomeModern /> },
  { id: 4, name: "Chef's Kitchen", icon: <TbToolsKitchen2 /> },
  { id: 5, name: "Surfing", icon: <MdKitesurfing /> },
  { id: 6, name: "Mansions", icon: <HiOutlineBuildingLibrary /> },
  { id: 7, name: "Luxe", icon: <IoFastFoodOutline /> },
  { id: 8, name: "Treehouses", icon: <TbTrees /> },
  { id: 9, name: "Camping", icon: <FaAirbnb /> },
  { id: 10, name: "Beachfront", icon: <TbBeach /> },
  { id: 11, name: "Farms", icon: <MdOutlineAgriculture /> },
  { id: 12, name: "Castles", icon: <MdOutlineCastle /> },
  { id: 13, name: "Islands", icon: <BiLandscape /> },
  { id: 14, name: "Vineyards", icon: <FaRaspberryPi /> },
  { id: 15, name: "Amazing Pools", icon: <FaSwimmingPool /> },
  { id: 16, name: "Skiing", icon: <FaSkiing /> },
  { id: 17, name: "Desert", icon: <TbHanger2 /> },
];

export default links;
