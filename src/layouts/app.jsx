import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "components";
import { AnimatePresence, motion } from "framer-motion";
export default function App({ not404 }) {
  const { pathname } = useLocation();
  const pageVariants = {
    initial: {
      opacity: 0.1,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0.1,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "linear",
    delay: 0.5,
  };
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        {not404 ? <Header /> : null}

        <Outlet />
        {not404 ? <Footer /> : null}
      </motion.div>
    </AnimatePresence>
  );
}
