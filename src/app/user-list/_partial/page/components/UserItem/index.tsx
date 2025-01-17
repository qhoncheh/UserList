import React from "react";
import Image from "next/image";
import "../../styles/user-item.scss";
import { UserItemProps } from "../../definitions/types/user-item";

export const UserItem: React.FC<UserItemProps> = ({
  flagUrl,
  image,
  userInfo,
}) => {
  const { first: firstName, last: lastName } = userInfo.name;
  const age = userInfo.dob.age;
  const gender = userInfo.gender;
  const fullName = firstName + lastName;
  const { city, street, country, state, postcode } = userInfo.location;
  return (
    <div className="contact-card">
      <div className="contact-card__item">
        <div className="contact-card__item-avatar">
          <Image src={image} width={90} height={90} alt="user profile image" />
        </div>
        <div className="contact-card__item-details">
          <div className="contact-card__item-details-name">{fullName}</div>
          <div className="contact-card__item-details-username">
            {`${firstName}-${age} / ${gender}`}
          </div>
          <div className="contact-card__item-details-contact">
            <div className="contact-card__item-details-contact-icon">
              🔥 {userInfo.phone}
            </div>
            <a
              href={"mailto:" + userInfo.email}
              className="contact-card__item-details-contact-email"
            >
              {userInfo.email}
            </a>
          </div>
          <div className="contact-card__item-details-address">
            {`${fullName}, ${street.number} ${street.name}, ${city}, ${state} ${postcode}, ${country}.`}
          </div>
        </div>
        <div className="contact-card__item-flag">
          <Image src={flagUrl} width={50} height={50} alt="flag image" />
        </div>
      </div>
    </div>
  );
};
