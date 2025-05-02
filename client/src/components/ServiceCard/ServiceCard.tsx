import { useState } from "react";
import "./ServiceCard.css";
import type { ServiceProps } from "./ServiceType";

function ServiceCard({ imgCategory, category, members }: ServiceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="service-card">
      <div className=".service-category">
        <button
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
        </button>
      </div>

      {isExpanded && (
        <div className="members">
          {members.map((member) => (
            <div key={member.id} className="member-card">
              <img
                className="image-member"
                src={member.imgAvatar}
                alt={member.name}
              />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ServiceCard;
