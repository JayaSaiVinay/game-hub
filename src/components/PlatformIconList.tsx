import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Icon from "@chakra-ui/icon";
import { IconType } from "react-icons/lib";
import { HStack } from "@chakra-ui/layout";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //slug: icon
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1.2}>
      {platforms.map((platform) => (
        <Icon color='gray.500' as={iconMap[platform.slug]}>{platform.name}</Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
