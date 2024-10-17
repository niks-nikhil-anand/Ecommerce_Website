"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Loader from '@/components/loader/loader';
import Container from '@/components/utils/Container';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/admin/dashboard/category')
      .then((response) => {
        // Directly handle the array if the data is not nested
        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error('Unexpected response format:', response);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />; // Show loader while fetching
  }

  if (!categories.length) {
    return <p className="text-center">No categories available.</p>;
  }

  return (
    <Container>

    <div className=" flex flex-col">
    <h2 className="h6 mb-4  ">Featured Categories</h2>
    <div className="flex flex-wrap justify-center gap-4 md:gap-2 lg:gap-8 hover:cursor-pointer">
      {categories.map((category) => (
        <motion.div
          key={category._id}
          className="flex flex-col items-center bg-gray-200 w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-48 rounded-md sm:px-8 sm:py-5 md:px-10 md:py-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mt-5">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = '/path/to/fallback-image.jpg')} // Fallback image in case of error
            />
          </div>
          <p className="mt-2 text-center text-sm font-medium sm:text-base md:text-lg">
            {category.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  </Container>
  

  );
};

export default CategoriesSection;
