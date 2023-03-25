import React from "react";
import { Graphics } from "../data";
import { useCreateModal } from "../shared/Modal";

const GraphicDesign = () => {
  const createModal = useCreateModal("PopOutImage");

  return (
    <div className="bg-bgSecondary  pt-16 ">
      <div className="flex justify-center">
        <div className=" p-2 mb-10 font-bold text-white text-4xl px-10">
          <span className="text-secondary"> Graphic Design</span> Portfolio
        </div>
      </div>
      <section className="overflow-hidden text-neutral-700">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {Graphics?.map((item) => (
              <div
                className="flex w-1/4 flex-wrap "
                key={item?.id}
                onClick={() => imgClick(item)}
              >
                <div className="w-full p-1 md:p-2">
                  <a href={item?.img} target="_blank">
                    <img
                      alt="gallery"
                      className="hover:-translate-y-1 hover:scale-105 duration-200 transition ease-in-out delay-150 block h-full w-full rounded-lg object-cover object-center "
                      src={item?.img}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;
