import React from 'react';
import Image from 'next/image'
import {CiMenuBurger, CiSearch} from "react-icons/ci";
import MainNav from "@/components/nav/main-nav";
const MainHeader = () => {
    return (
        <header className={'h-fit border-y'}>
            <section className={'flex items-center lg:mx-auto max-w-[1400px] h-full'}>
                <Image
                    src="/logo/logo.jpg"
                    alt="main logo"
                    width={162}
                    height={89}
                />

                <MainNav/>
                <div className={'flex space-x-2'}>
                    <span><CiSearch size={25}/></span>
                    <span><CiMenuBurger size={25}/> </span>
                </div>
            </section>
        </header>
    );
};

export default MainHeader;