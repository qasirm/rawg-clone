import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game-hub.webp";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="60px" />
      </HStack>
    </div>
  );
};

export default NavBar;
