    import { BiHomeHeart } from "react-icons/bi";
    import { PiStarFourBold } from "react-icons/pi";
    import { CgProfile } from "react-icons/cg";
    import { IoNotificationsOutline } from "react-icons/io5";

    export const bottomNav = [
      {
        id: 1,
        icon: BiHomeHeart,
        name: "Home",
        link: "/",
      },
      {
        id: 2,
        icon: PiStarFourBold,
        name: "Ai",
        link: "/AiPage",
      },
      {
        id: 3,
        icon: IoNotificationsOutline,
        name: "Notification",
        link: "/notificationPage",
      },

      {
        id: 4,
        icon: CgProfile,
        name: "My Page",
        link: "/myPage",
      },
    ];
