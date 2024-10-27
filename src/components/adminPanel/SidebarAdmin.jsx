"use client";
import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaBuilding, FaPlus, FaShoppingCart, FaListAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TiThMenu } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import Link from 'next/link';
import { MdOutlineLogout } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { useRouter } from 'next/navigation';

const SidebarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/admin/auth/logout', {
        method: 'POST',
      });
      const data = await response.json();
      if (response.ok) {
        router.push('/');
      } else {
        alert(`Logout failed: ${data.message}`);
      }
    } catch (error) {
      alert(`Logout failed: ${error.message}`);
    }
  };

  return (
    <div className="flex">
      <motion.div
        animate={{ width: isOpen ? '250px' : '90px' }}
        className="bg-gradient-to-r from-black to-gray-800 text-white dark:bg-gray-900 dark:text-gray-200 h-screen p-5 transition-width duration-300 shadow-xl overflow-y-auto"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.3)' }}
      >
        <button
          onClick={toggleSidebar}
          className="bg-white text-black p-2 rounded mb-4 shadow-md transition-transform transform hover:scale-110"
        >
          <TiThMenu />
        </button>
        <div className={`flex flex-col space-y-4`}>
          <h2 className={`text-lg font-semibold mb-4 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            {isOpen ? 'Dashboard' : ''}
          </h2>
          <Link href="/admin/dashboard/property/AddProperty" passHref>
            <SidebarItem icon={<FaHome />} label="Home" isOpen={isOpen} />
          </Link>

          {isOpen && <h3 className="text-sm font-medium mt-4 mb-2 text-yellow-300 ">Products</h3>}

          <Link href="/admin/dashboard/product/addProduct" passHref>
            <SidebarItem icon={<FaPlus />} label="Add Product" isOpen={isOpen} />
          </Link>
          <Link href="/admin/dashboard/product/allProduct" passHref>
            <SidebarItem icon={<FaBuilding />} label="Products" isOpen={isOpen} />
          </Link>

          

          {isOpen && <h3 className="text-sm font-medium mt-4 mb-2 text-yellow-300">Categories</h3>}
          <Link href="/admin/dashboard/category/addCategory" passHref>
            <SidebarItem icon={<FaPlus />} label="Add Categories" isOpen={isOpen} />
          </Link>
          <Link href="/admin/dashboard/category/allCategory" passHref>
            <SidebarItem icon={<FaListAlt />} label="All Categories" isOpen={isOpen} />
          </Link>

          {isOpen && <h3 className="text-sm font-medium mt-4 mb-2 text-yellow-300">Orders</h3>}
          <Link href="/admin/dashboard/orders/allOrders" passHref>
            <SidebarItem icon={<FaShoppingCart />} label="All Orders" isOpen={isOpen} />
          </Link>
          <Link href="/admin/dashboard/orders/orderStatus" passHref>
            <SidebarItem icon={<FaListAlt />} label="Order Status" isOpen={isOpen} />
          </Link>

          {isOpen && <h3 className="text-sm font-medium mt-4 mb-2 text-yellow-300">Blog</h3>}
          <Link href="/admin/dashboard/blog/addBlog" passHref>
            <SidebarItem icon={<FaPlus />} label="Add Blog" isOpen={isOpen} />
          </Link>
          <Link href="/admin/dashboard/blog/allBlog" passHref>
            <SidebarItem icon={<GrArticle />} label="Blogs" isOpen={isOpen} />
          </Link>

          {isOpen && <h3 className="text-sm font-medium mt-4 mb-2 text-yellow-300">Policies</h3>}
          <Link href="/admin/dashboard/policy/termsAndCondition" passHref>
            <SidebarItem icon={<GrArticle />} label="Terms&Cond.." isOpen={isOpen} />
          </Link>
          <Link href="/admin/dashboard/policy/privacyPolicy" passHref>
            <SidebarItem icon={<GrArticle />} label="Privacy Policy" isOpen={isOpen} />
          </Link>
          <Link href="/admin/dashboard/policy/returnPolicy" passHref>
            <SidebarItem icon={<GrArticle />} label="Return Policy" isOpen={isOpen} />
          </Link>
          <Link href="/admin/dashboard/policy/shippingPolicy" passHref>
            <SidebarItem icon={<GrArticle />} label="Shipping & Delivery Policy" isOpen={isOpen} />
          </Link>
          {isOpen && <h3 className="text-sm font-medium mt-4 mb-2 text-yellow-300">Account</h3>}

          <Link href="/admin/dashboard/profile" passHref>
            <SidebarItem icon={<ImProfile />} label="Profile" isOpen={isOpen} />
          </Link>
          <Link href="/settings" passHref>
            <SidebarItem icon={<FaCog />} label="Settings" isOpen={isOpen} />
          </Link>

          <button
            className="mt-6 flex items-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50 shadow-md"
            onClick={handleLogout}
          >
            <MdOutlineLogout className="h-5 w-5" aria-hidden="true" />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const SidebarItem = ({ icon, label, isOpen }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800 hover:px-5 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      <div className="text-xl">{icon}</div>
      {isOpen && <span className="text-sm font-medium">{label}</span>}
    </motion.div>
  );
};

export default SidebarAdmin;
