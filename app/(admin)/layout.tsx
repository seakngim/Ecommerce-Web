"use client";
import SideBarComponent from "@/components/sidebar/SideBarComponent";
import "@/app/globals.css";
import { MenuIcon } from "@/components/icons/FontAwsome";
import { useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(true);
  console.log(isShowSideBar);
  return (
    <html>
      <body>
		<div className="bg-[#253C95] inline w-full z-20">
          <MenuIcon
            onClick={() => setIsShowSideBar(!isShowSideBar)}
            classname="h-8 w-8 fixed top-0 m-4 cursor-pointer lg:hidden"
          />
        </div>
        <div className="flex none-scroll-bar">
          <aside
            className={`sticky left-0 z-10 h-screen ${
              isShowSideBar && "hidden"
            } lg:block`}
          >
            <SideBarComponent />
          </aside>
          <main className="flex-1">{children}</main>
        </div>
        
      </body>
    </html>
  );
}
