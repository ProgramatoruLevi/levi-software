import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import { siteData } from "../content/siteData";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-border/40 bg-base/70 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <Link to="/" className="font-display text-lg tracking-wide text-text">
            {siteData.site.name}
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm transition ${
                    isActive ? "text-accent" : "text-muted hover:text-text"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button to="/contact" size="sm">
              Cere oferta
            </Button>
          </div>
          <button
            className="md:hidden rounded-full border border-border/50 p-2 text-muted"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </Container>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-b border-border/40 bg-base/95"
          >
            <Container className="flex flex-col gap-4 py-4">
              {siteData.navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base ${isActive ? "text-accent" : "text-muted"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button to="/contact" size="sm" className="w-fit">
                Cere oferta
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;