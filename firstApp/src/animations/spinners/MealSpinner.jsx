import React from "react";
import { BallTriangle, Rings } from "react-loader-spinner";
import { AnimatePresence, motion } from "framer-motion";
import { smoothPopIn } from "../Animation";

export const ConfirmSpinner = () => {
  return (
    <AnimatePresence>
      <motion.div
        {...smoothPopIn}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-lg"
      >
        <div className="container mx-auto flex flex-col items-center justify-center">
          <BallTriangle
            height={192}
            width={192}
            color="#6366F1"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          <div className="mt-8 w-full text-center lg:w-2/3">
            <p className="title-font text-md mb-4 flex justify-center font-medium text-white  lg:text-4xl">
              Fetching meals...!
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
