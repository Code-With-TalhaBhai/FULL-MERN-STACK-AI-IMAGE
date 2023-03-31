'use client'
import { form } from "@/typings";
import React, { useEffect } from "react";
import Card from "./Card";



type Props = {
  data: form[];
  title: string;
};

function RenderCards({ data, title }: Props) {  
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
      {
      data.length > 0 ? (
        data?.map((post:any, index:any) => <Card {...post} key={index} />)
      ) : (
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
          {title}
        </h2>
      )
    }
    </div>
  );
}

export default RenderCards;
