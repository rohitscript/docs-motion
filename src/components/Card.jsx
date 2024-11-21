import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data,reference }) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} className=" flrx-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden ">
        <FaRegFileAlt />
        <p className="text-sm m-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full left-0  ">
          <div className="flex items-center justify-between mb-3 py-3 px-8">
            <h5> {data.filesize} </h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor}  flex items-center justify-center`}>
              <h3 className="text-md">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
