import { IMenuItems } from "../interfaces";
import { AccountCircleOutlined, MapOutlined } from "@mui/icons-material";

export const MenuItems:IMenuItems[] = [
    {
        id: 'login',
        label: 'Login',
        route: '/',
        icon:   <AccountCircleOutlined />
    },
    {
        id: 'map',
        label: 'Mapa',
        route: '/locations',
        icon:   <MapOutlined />
    }
];