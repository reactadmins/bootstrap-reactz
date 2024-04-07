import Dashboard from "./views/Dashboard";
import Buttons from "./views/Buttons";
import Badges from "./views/Badges";
import SocialButtons from "./views/SocialButtons";
import Cards from "./views/Cards";
import Alerts from "./views/Alerts";
import ProgressBars from "./views/ProgressBars";
import Modals from "./views/Modals";
import Grids from "./views/Grids";
import Typography from "./views/Typography";
import Tables from "./views/Tables";
import Forms from "./views/Forms";
import Widgets from "./views/Widgets";
import Charts from "./views/Charts";
import Maps from "./views/Maps";
import Page404 from "./views/Page404";

const routes = [
    {
        path: "/",
        component: Dashboard,
    },
    {
        path: ".",
        component: Dashboard,
    },
    {
        path: "/dashboard",
        component: Dashboard,
    },
    {
        path: "/components/buttons",
        component: Buttons,
    },
    {
        path: "/components/badges",
        component: Badges,
    },
    {
        path: "/components/socials",
        component: SocialButtons,
    },
    {
        path: "/components/cards",
        component: Cards,
    },
    {
        path: "/components/alerts",
        component: Alerts,
    },
    {
        path: "/components/progressbars",
        component: ProgressBars,
    },
    {
        path: "/components/modals",
        component: Modals,
    },
    {
        path: "/components/grids",
        component: Grids,
    },
    {
        path: "/components/typography",
        component: Typography,
    },
    {
        path: "/components/tables",
        component: Tables,
    },
    {
        path: "/components/forms",
        component: Forms,
    },
    {
        path: "/components/widgets",
        component: Widgets,
    },
    {
        path: "/components/charts",
        component: Charts,
    },
    {
        path: "/components/maps",
        component: Maps,
    },
    {
        route: "*",
        component: Page404,
    },
];

export default routes;

