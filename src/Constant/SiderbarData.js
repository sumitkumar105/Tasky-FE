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
    path: "/",
  },
  {
    id: 2,
    title: "Notification",
    icon: <NotificationsIcon />,
    path: "/notification",
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
    path: "/myTask",
  },
  {
    id: 5,
    title: "CompletedTask",
    icon: <TaskAltIcon />,
    path: "/completedTask",
  },
];

export const logoutData = [
  { id: 1, title: "Logout", icon: <LogoutIcon />, path: "/home" },
];
