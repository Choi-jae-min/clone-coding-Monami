'use client'
import React from 'react';
import Link from "next/link";

const menuList = [
    {name : '모나미소개', subMenu : [
            {name : 'CEO 메세지', link : '/'},
            {name : '회사정보', link : '/'},
            {name : '회사연혁', link : '/'},
            {name : '윤리강령', link : '/'},
            {name : '투자정보', link : '/'},
            {name : 'CI', link : '/'},
            {name : '찾아오시는 길', link : '/'},
            {name : '안전보건 경영방침', link : '/'},
        ]},
    {name : '모나미제품', subMenu : [
            {name : '프리미엄 펜', link : '/'},
            {name : '펜·펜슬', link : '/'},
            {name : '마카·컬러링', link : '/'},
            {name : '노트·사무용품', link : '/'},
            {name : '잉크·리필', link : '/'},
            {name : '카탈로그', link : '/'},
        ]},
    {name : 'NEWS & VIDEO', subMenu : [
            {name : '보도자료', link : '/'},
            {name : '동영상자료', link : '/'},
        ]},
    {name : '모나미 미술대회', subMenu : [
            {name : '미술대회 소개', link : '/'},
            {name : '수상작 발표', link : '/'},
        ]},
    {name : '고객지원', subMenu : [
            {name : '자주묻는질문', link : '/'},
            {name : '문의하기', link : '/'},
        ]},
    {name : '기업 구매 / 개발', subMenu : [
            {name : '대량 구매 문의', link : '/'},
            {name : '기업 및 단체 구매', link : '/'},
            {name : '산업용 맞춤 제품개발', link : '/'},
        ]}
    ]
const MainNav = () => {
    const [selectedMenu, setSelectedMenu] = React.useState<number>(null)
    return (
        <nav className={'w-full h-full'}>
            <ul className={'flex justify-evenly items-center h-[89px]'}>
                {menuList.map((menu, index) => (
                    <li onMouseEnter={() => {setSelectedMenu(index)}} key={index} className={'relative w-full text-center group'}>
                        <Link className={'group-hover:text-mainColor transition-colors text-16 font-medium'} href={'/'}>{menu.name}</Link>

                        <ul className={`absolute bg-gray-100 w-full top-[55.5px] text-subGray border-t-2 border-t-mainColor invisible group-hover:visible`}>
                            {menu.subMenu.map((subMenu, index) => (
                                <li key={index} className={'hover:text-mainColor transition-colors border-b py-2.5'}>
                                    <Link href={subMenu.link}>{subMenu.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainNav;