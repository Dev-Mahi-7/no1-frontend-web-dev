"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const createCounter = () => {
  //   closures
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    getCount: () => count,
  };
};

const ClosuresContainer = () => {
  const counterRef = useRef(createCounter());
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(counterRef.current.increment());
  };

  const handleDecrement = () => {
    setCount(counterRef.current.decrement());
  };

  const handleReset = () => {
    setCount(counterRef.current.reset());
  };

  return (
    <div className=" h-[96vh] w-full flex justify-center items-center">
      <div className="bg-amber-200 w-200 h-100 p-4 flex flex-col gap-4 justify-center items-center ">
        <h1 className="text-6xl font-extralight">Closures Concept</h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={count} // 👈 important (trigger animation)
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-9xl font-extralight ${
              count === 0 ? "text-red-500" : "text-blue-600"
            }`}
          >
            {count}
          </motion.div>
        </AnimatePresence>
        <div className="btns flex ">
          <button
            onClick={handleIncrement}
            className=" font-extralight hover:bg-amber-200 hover:border-10 border-amber-50  h-20 bg-amber-50 cursor-pointer   text-xl w-40"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className=" font-extralight hover:bg-amber-200 hover:border-10 border-amber-50  h-20 bg-amber-50 cursor-pointer text-xl w-40"
          >
            Decrement
          </button>
          <button
            onClick={handleReset}
            className="  font-extralight hover:bg-amber-200 hover:border-10 border-amber-50 h-20 bg-amber-50 cursor-pointer  text-xl w-40"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClosuresContainer;
