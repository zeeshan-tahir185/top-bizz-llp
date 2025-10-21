"use client";
import Link from 'next/link';
import { Layout, Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const { Header } = Layout;

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Header className="fixed w-full !bg-white shadow-md z-10 !px-[10px]">
            <div className="max-w-[1440px] w-full mx-auto px-4 flex items-center justify-between ">
                <div className="logo">
                    <Link href="/" className="text-lg md:text-2xl font-bold text-blue-60">
                       <img src="/images/logo.png" alt="" className='w-[120px]' />
                    </Link>
                </div>
                {!isMobile && (
                    <div className="justify-end">
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            className="bg-white border-0"
                        >
                            <Menu.Item key="1">
                                <Link href="/" >Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link href="/about">About</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link href="/services">Services</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link href="/gallery">Gallery</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link href="/contact">Contact Us</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                )}
                {isMobile && (
                    <Button
                        type="primary"
                        icon={<MenuOutlined />}
                        onClick={showDrawer}
                        className="p-2"
                    />
                )}
                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{ padding: 0 }}
                >
                    <Menu mode="vertical" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={onClose}>
                            <Link href="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={onClose}>
                            <Link href="/about">About</Link>
                        </Menu.Item>
                        <Menu.Item key="3" onClick={onClose}>
                            <Link href="/services">Services</Link>
                        </Menu.Item>
                        <Menu.Item key="4" onClick={onClose}>
                            <Link href="/gallery">Gallery</Link>
                        </Menu.Item>
                        <Menu.Item key="5" onClick={onClose}>
                            <Link href="/contact">Contact Us</Link>
                        </Menu.Item>
                    </Menu>
                </Drawer>
            </div>
        </Header>
    );
}