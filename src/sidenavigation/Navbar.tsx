// import {  GroupIcon } from "";
import React,{useState} from "react";
import "./Navbar.scss"
import { HomeOutlined,LayoutOutlined,HeartOutlined,SettingOutlined } from "@ant-design/icons"
import { Avatar, Space } from 'antd';
import { UserOutlined,TeamOutlined ,CarryOutOutlined ,ShareAltOutlined,FileDoneOutlined} from '@ant-design/icons';
import classNames from "classnames";

const menuIcons = [
  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />,
  <HomeOutlined />,
  <TeamOutlined />,
  <CarryOutOutlined />,
  <ShareAltOutlined />,
  <FileDoneOutlined />,
  <LayoutOutlined />,
  <HeartOutlined />,
  // <CalendarIcon className="h-5 w-5" />,
  // <ShareIcon className="h-5 w-5" />,
  // <FileIcon className="h-5 w-5" />,
  // <NotebookIcon className="h-5 w-5" />,
  // <HeartIcon className="h-5 w-5" />,
  // <ChevronRightIcon className="h-4 w-4" />,
];

const Navbar = () => {

  const [activeNav, setActiveNav] = useState(0);
    return (
       
    
        <div id="navbar">
      <div className="flex flex-col items-center">
      <ul className="flex flex-col items-center gap-1">
          {menuIcons.map((item, idx) => (
            <li style={{ fontSize: 20 }}
              key={idx}
              className={classNames(
                "p-[15px] rounded-lg text-dark cursor-pointer",
                {
                  "bg-[#E9EFFF] !text-blue": idx === activeNav,
                }
              )}
              onClick={() => setActiveNav(idx)}
            >
              {item}
            </li>
          ))}
        </ul>
     {/* <Avatar />
        <div className="flex flex-col items-center gap-11">
          <HomeOutlined />
        </div> */}
      </div>
     
      <div>
      <div className="py-3 text-center" style={{fontSize:'20px'}}> <SettingOutlined /></div>
      <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>AS</Avatar>

      </div>
              </div>
      
    );
};

export default Navbar;
