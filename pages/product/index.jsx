import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Index = () => {
  return (
    <div className="flex items-center h-screen gap-20 py-20 ">
      <div className="relative flex-1 w-[60%] h-[60%] mx-20">
        <Image src="/images/food.png" alt="" layout="fill" />
      </div>
      <div className="flex-1">
        <Title addClass="text-6xl ">Good Pizza</Title>
        <span
          className="text-primary text-2xl
        font-bold underline my-4 inline-block"
        >
          $10
        </span>
        <p className="text-sm my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          quibusdam numquam sed minima earum corporis nisi neque vitae
          blanditiis perspiciatis?
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20">
            <div className="relative w-8 h-8">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span
                className="absolute top-0 -right-6 text-xs
               bg-primary rounded-full px-[5px] font-medium"
              >
                Small
              </span>
            </div>
            <div className="relative w-12 h-12 ">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span
                className="absolute top-0 -right-6 text-xs
               bg-primary rounded-full px-[5px] font-medium"
              >
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span
                className="absolute top-0 -right-6 text-xs
               bg-primary rounded-full px-[5px] font-medium"
              >
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 mt-4">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">ketchup</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <span className="text-sm font-semibold">ketchup</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Index;
