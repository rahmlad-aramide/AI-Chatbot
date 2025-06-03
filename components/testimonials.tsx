import Image from "next/image";
import janeVincent from "@/assets/images/jane-vincent.png";

export const Testimonials = () => {
  return (
    <section className="flex flex-col gap-11 pt-[51px] md:pt-16 pb-[130px] font-(family-name:--font-inter)">
      <h3 className="text-2xl md:text-3xl font-semibold text-center">
        What people are saying
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-y-11 gap-x-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-[#0D0C0C] rounded-[5px] px-3 py-6"
          >
            <figure className="flex flex-col gap-4.5 md:gap-5">
              <blockquote>
                <p className="text-sm">
                  Writing good copy is hard, even if it’s just placeholder
                  test.Relume Ipsu,Writing good copy is hard, even if it’s just
                  placeholder test.Relume Ipsu{" "}
                </p>
              </blockquote>
              <div className="flex gap-5 items-center">
                <Image
                  src={janeVincent}
                  width={131}
                  height={131}
                  alt="James Vincent image"
                  className="h-[65px] w-auto md:h-[69px] md:w-auto"
                />
                <div>
                  <h6 className="text-sm">Jane Vincent</h6>
                  <p className="text-sm opacity-50">Product manager</p>
                </div>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};
