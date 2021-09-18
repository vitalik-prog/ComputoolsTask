import {AppDarkColor, AppLightColor} from "../enums";

const darkTheme = {
  dark: true,
  colors: {
    primary: AppDarkColor.BACKGROUND,
    background: AppDarkColor.BACKGROUND,
    card: AppDarkColor.BUTTON,
    text: AppDarkColor.TEXT,
    border: AppDarkColor.TEXT,
    notification: AppDarkColor.CONTRAST,
  },
};

const lightTheme = {
  dark: false,
  colors: {
    primary: AppLightColor.BACKGROUND,
    background: AppLightColor.BACKGROUND,
    card: AppLightColor.BUTTON,
    text: AppLightColor.TEXT,
    border: AppLightColor.TEXT,
    notification: AppLightColor.CONTRAST,
  },
};

export { darkTheme, lightTheme }
