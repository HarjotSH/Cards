import React, { useState } from "react";
import Cards from "./Cards";
import { useRef } from "react";

function Foreground() {
  // const data = {
  //   icon,desc, filesize, closeOrDownload, tagDetails
  // };
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: "10mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".7mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".7mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className=" fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
