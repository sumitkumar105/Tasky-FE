import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GridViewIcon from "@mui/icons-material/GridView";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LogoutIcon from "@mui/icons-material/Logout";
export const sidebarData = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    id: 2,
    title: "Notification",
    icon: <NotificationsIcon />,
    path: "/home",
  },
  {
    id: 3,
    title: "Dashboard",
    icon: <GridViewIcon />,
    path: "/home",
  },
  {
    id: 4,
    title: "MyTask",
    icon: <AssignmentIcon />,
    path: "/home",
  },
  {
    id: 5,
    title: "CompletedTask",
    icon: <TaskAltIcon />,
    path: "/home",
  },
];

export const logoutData = [
  { id: 1, title: "Logout", icon: <LogoutIcon />, path: "/home" },
];
