import { HeaderOnly } from "~/compoment/Layout";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
const publicRoutes =[
    { path: '/' ,compoment : Home},
    { path: '/following' ,compoment : Following},
    { path: '/search' ,compoment : Search, layout: null},
    { path: '/upload' ,compoment : Upload, layout: HeaderOnly},
]
const privateRoutes =[

]
export { publicRoutes, privateRoutes }