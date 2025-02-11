import React from "react";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import { MdBiotech } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";

const iconMapping = {
  payable: { icon: RiMoneyEuroCircleFill, color: "bg-green-800" },
  Technology: { icon: MdBiotech, color: "bg-blue-600" },
  Cars: { icon: IoCarSportSharp, color: "bg-red-600" },
  Music: { icon: FaMusic, color: "bg-purple-600" },
};

const EventCategoryIcon = ({ product }) => {
  const isPayable = product?.data?.payable;
  const category = product?.data?.category;

  const config =
    isPayable
      ? iconMapping.payable
      : category && iconMapping[category]
      ? iconMapping[category]
      : null;

  if (!config) return null;

  const IconComponent = config.icon;

  return (
    <div className={`absolute top-2 right-2 z-10 ${config.color} text-white px-2 py-2 rounded-2xl`}>
      <IconComponent size={20} />
    </div>
  );
};

export default EventCategoryIcon;
