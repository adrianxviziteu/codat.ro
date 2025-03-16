"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Cum găsesc IMEI-ul?
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {index === 0 && "Pasul 1: Intră în Configurări"}
                {index === 1 && "Pasul 2: Selectează General"}
                {index === 2 && "Pasul 3: Apasă pe Informații"}
              </span>{" "}
              {index === 0 && "Deschide aplicația Configurări de pe ecranul principal al iPhone-ului tău."}
              {index === 1 && "În meniul Configurări, caută și apasă pe opțiunea General."}
              {index === 2 && "În meniul General, găsește și selectează opțiunea Informații. Derulează în jos până găsești numărul IMEI în lista de informații."}
            </p>
            <Image
              src={index === 0 ? "/iphone-settings.jpg" : index === 1 ? "/iphone-general.jpg" : "/iphone-imei.jpg"}
              alt={index === 0 ? "iPhone Settings" : index === 1 ? "iPhone General Settings" : "iPhone IMEI Location"}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Pasul 1",
    title: "Intră în Configurări",
    src: "/iphone-settings.jpg",
    content: <DummyContent />,
  },
  {
    category: "Pasul 2",
    title: "Selectează General",
    src: "/iphone-general.jpg",
    content: <DummyContent />,
  },
  {
    category: "Pasul 3",
    title: "Apasă pe Informații",
    src: "/iphone-imei.jpg",
    content: <DummyContent />,
  },
  {
    category: "Pasul 4",
    title: "Găsește IMEI-ul",
    src: "/iphone-imei-number.jpg",
    content: <DummyContent />,
  }
]; 