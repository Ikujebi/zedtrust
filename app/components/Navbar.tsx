"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Menu, X } from "lucide-react";
import { Button } from "antd";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Analytics", href: "#analytics" },
    { label: "Security", href: "#security" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 glass-panel rounded-2xl px-6 py-4 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Wallet className="text-lemon h-6 w-6" />
          <span className="text-xl font-bold tracking-tight text-white">
            ZEDTRUST<span className="text-lemon">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-lemon transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-300 hover:text-white text-sm font-medium">
            Sign In
          </button>

          <Button
            type="primary"
            size="large"
            className="font-semibold bg-lemon text-black border-none"
          >
            Open Account
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] z-40 glass-panel rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-5 text-white">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-lemon transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <hr className="border-white/10" />

              <button className="text-left">Sign In</button>

              <Button
                type="primary"
                size="large"
                className="bg-lemon text-black border-none"
              >
                Open Account
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}