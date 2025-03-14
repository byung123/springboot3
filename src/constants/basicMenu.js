import { IoCreateOutline, IoSearchOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";

export const basic_Menu = [
    {
        id: 1,
        name: "POST요청",
        path: "/async/basic/post",
        icon: <IoCreateOutline></IoCreateOutline>
    },
    {
        id: 2,
        name: "GET요청",
        path: "/async/basic/get",
        icon: <IoSearchOutline></IoSearchOutline>
    },
    {
        id: 3,
        name: "PUT요청",
        path: "/async/basic/put",
        icon: <CiEdit></CiEdit>
    },
    {
        id: 4,
        name: "DELETE요청",
        path: "/async/basic/delete",
        icon: <IoRemoveCircleOutline></IoRemoveCircleOutline>
    },
    {
        id: 5,
        name: "POST2요청",
        path: "/async/basic/post2",
        icon: <IoCreateOutline></IoCreateOutline>
    },
    {
        id: 6,
        name: "Promise학습",
        path: "/async/basic/promise",
        icon: <IoCreateOutline></IoCreateOutline>
    },
    {
        id: 7,
        name: "사이즈 등록",
        path: "/async/basic/size/register",
        icon: <IoCreateOutline></IoCreateOutline>
    },
    {
        id: 8,
        name: "색상 등록",
        path: "/async/basic/color/register",
        icon: <IoCreateOutline></IoCreateOutline>
    },
    {
        id: 9,
        name: "컴퓨터",
        path: "/computer",
        icon: <RiComputerLine></RiComputerLine>
    }
];
    
