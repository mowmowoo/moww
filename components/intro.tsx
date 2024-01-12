import Image from "next/image";
import React from "react";

export const intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
            alt="Ricardo portrait"
          />
        </div>
      </div>
    </section>
  );
};
