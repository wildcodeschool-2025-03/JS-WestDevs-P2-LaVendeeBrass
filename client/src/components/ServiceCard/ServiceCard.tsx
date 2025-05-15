import { useState } from "react";
import "./ServiceCard.css";
import { AnimatePresence, motion } from "motion/react";
import type { ServiceProps } from "./ServiceType";

function ServiceCard({ imgCategory, category, members }: ServiceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="service-card">
      <div className="service-category">
        <motion.button
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          type="button"
          className="service-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img
            className="image-service"
            src={imgCategory}
            alt="avatar catégorie"
          />
          <h2>{category}</h2>
          <p>Détails ⇓</p>
        </motion.button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="members"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            {members.map((member) => (
              <motion.div
                key={member.id}
                className="member-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  className="image-member"
                  src={member.imgAvatar}
                  alt={member.name}
                />
                <p>{member.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ServiceCard;
