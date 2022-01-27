import React from "react";

import computerImage from "@assets/computer-3.png";
import disktopImage from "@assets/desktop-1.png";
import settingGearImage from "@assets/settings_gear-3.png";
import accessibilityImage from "@assets/accessibility-3.png";
import helpbookImage from "@assets/help_book_big-0.png";
import executableImage from "@assets/executable-0.png";
import shutDownImage from "@assets/shut_down_normal-0.png";
import StartMenu from "./StartMenu.stye";

const StartMenus = () => {
  return (
    <StartMenu.Container>
      <StartMenu.Options>
        <StartMenu.ImageIcon src={computerImage} />
        Programes
      </StartMenu.Options>
      <StartMenu.Options>
        <StartMenu.ImageIcon src={disktopImage} />
        Documents
      </StartMenu.Options>
      <StartMenu.Options>
        <StartMenu.ImageIcon src={settingGearImage} />
        Settings
      </StartMenu.Options>
      <StartMenu.Options>
        <StartMenu.ImageIcon src={accessibilityImage} />
        Find
      </StartMenu.Options>
      <StartMenu.Options>
        <StartMenu.ImageIcon src={helpbookImage} />
        Help
      </StartMenu.Options>
      <StartMenu.Options>
        <StartMenu.ImageIcon src={executableImage} />
        Run
      </StartMenu.Options>
      <StartMenu.Line />
      <StartMenu.Options>
        <StartMenu.ImageIcon src={shutDownImage} />
        Shutdown
      </StartMenu.Options>
    </StartMenu.Container>
  );
};

export default StartMenus;
