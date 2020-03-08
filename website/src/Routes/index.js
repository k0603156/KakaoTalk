import Home from "./Home";
import Chat from "./Chat";
import More from "./More";
import { UserIco, SpeechBubbleIco, EllipseIco } from "Components/ToggleIcons";

export default [
  {
    path: "/",
    component: Home,
    ico: UserIco
  },
  {
    path: "/chat",
    component: Chat,
    ico: SpeechBubbleIco
  },
  {
    path: "/more",
    component: More,
    ico: EllipseIco
  }
];
