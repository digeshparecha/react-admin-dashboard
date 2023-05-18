import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const SideMenu = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeOutlinedIcon />,
    group: null,
  },
  {
    title: "Manage Team",
    to: "/team",
    icon: <PeopleOutlinedIcon />,
    group: "Data",
  },
  {
    title: "Contacts Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />,
    group: "Data",
  },
  {
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
    group: "Data",
  },
  {
    title: "Profile Form",
    to: "/form",
    icon: <PersonOutlinedIcon />,
    group: "Pages",
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
    group: "Pages",
  },
  {
    title: "Line Chart",
    to: "/line",
    icon: <TimelineOutlinedIcon />,
    group: "Charts",
  },
  
];

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-sidebar-root": {
          borderColor: `${colors.primary[400]} !important`,
          height: "100% !important",
        },
        "& .ps-menu-icon": {
          background: "transparent !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
          background: `${colors.primary[500]} !important`,
        },
        "& .ps-active": {
          color: "#6870fa !important",
        },
        "& .ps-menuitem-root": {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin
                </Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-image"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  style={{ m: "10px 0 0 0" }}
                >
                  Digesh Parecha
                </Typography>
                <Typography variant="h3" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu items */}
          <Box>
            {SideMenu?.map((v) => (
              <>
                {/* {currentGroup && currentGroup !== v.group && (
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    {v.group}
                  </Typography>
                )} */}
                <MenuItem
                  key={v.title}
                  active={selected === v.title}
                  onClick={() => setSelected(v.title)}
                  icon={v.icon}
                  component={<Link to={v.to} />}
                >
                  <Typography>{v.title}</Typography>
                </MenuItem>
              </>
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
