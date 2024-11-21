import React,{useRef} from "react";
import Card from "./Card";

const Foreground = () => {
    const ref=useRef(null);
  const data = [
    {
      desc: "this is description blah blah blah",
      filesize: ".8mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-blue-600",
      },
    },
    {
        desc: "this is description blah blah blah",
        filesize: ".8mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Upload Now",
          tagColor: "bg-green-600",
        },
      },
      {
        desc: "this is description blah blah blah",
        filesize: ".8mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "bg-blue-600",
        },
      },
  ];

  return (
    <>
      <div ref={ref} className="fixed z-[3] w-full h-full top-0 left-0 flex gap-5 p-5 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} key={index} reference={ref}/>
        ))}
      </div>
    </>
  );
};

export default Foreground;
