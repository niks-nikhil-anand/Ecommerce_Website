import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-orange-500">Useful Links</h3>
          <div className="w-16 h-1 bg-purple-600 mb-4"></div>
          <ul className="space-y-2">
          {[
              { name: 'Shop', url: '/product/shopAllProducts' },
              { name: 'Contact', url: '/contactUs' },
              { name: 'Blog', url: '/blog' },
              { name: 'International Orders', url: '/international-orders' },
              { name: 'International Distributors', url: '/international-distributors' },
              { name: 'About Us', url: '/aboutUs' },
              { name: 'Feedback', url: '/feedback' }
            ].map((link) => (
              <li key={link.name} className="hover:underline cursor-pointer">
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold text-orange-500">Resources</h3>
          <div className="w-16 h-1 bg-purple-600 mb-4"></div>
          <ul className="space-y-3">
          {[
              { name: 'Home', url: '/' },
              { name: 'Cancellation and Return Policies', url: '/returnPolicy' },
              { name: 'Shipping And Delivery', url: '/shippingPolicy' },
              { name: 'Privacy Policy', url: '/privacyPolicy' },
              { name: 'Terms & Condition', url: '/termsAndConditions' },
              { name: 'CCPA Notice', url: '/ccpa' },
              { name: 'Affiliate Program', url: '/affiliate' }
            ].map((link) => (
              <li key={link.name} className="hover:underline cursor-pointer">
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Subscription Form */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-black text-center">Get 15% Off</h3>
          <p className="text-sm text-black font-medium text-center">Sign up to get 15% off your first order and other great promos, giveaways and news!</p>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full border border-black p-4 rounded-md focus:ring-2 "
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border border-black p-4 rounded-md focus:ring-2 "
            />
            <button 
              type="submit" 
              className="w-full bg-purple-600 text-white p-3 rounded-md font-bold shadow-lg hover:bg-purple-700"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
      <div className="mt-10 text-center text-sm text-black">
        <p>Copyright © 2024, <a href="#" className="text-black underline">JonoJivan Grocery</a></p>
        <div className="mt-4  p-4  flex justify-center items-center flex-col ">
          <div className='md:w-[50rem] w-[20rem] rounded-lg border border-gray-200 px-5 md:py-8 py-5'>
          <p className=' text-center'>**50% OFF discount valid on all grocery items at JonoJivan Grocery.** Discount not applicable on recurring subscription orders. Discount will be automatically applied at checkout.Offer may be modified or terminated at any time. Exclusions apply.</p>
          <p className="mt-2  text-center">**These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
