import { EditIcon } from "@/assets/svg"
import Image, { StaticImageData } from "next/image"

export const UserChat = ({image, time, date, message}: {image: StaticImageData, time: string, date: string, message: string}) => {
    return (
        <div className="relative w-full max-w-[90%] mx-auto">
                    <div className="flex gap-2 z-20 -mb-4">
                      <Image src={image} alt="user avatar" className="w-8 h-8 z-20"  />
                      <span className="text-[#EEEEEE] font-semibold text-xs leading-4">You</span>
                      <span className="text-[#ABABAB99] text-[8px] mt-0.5">{date} ▪ {time}</span>
                    </div>
                    <div className="bg-[#424242] py-3 gap-3 rounded-2xl w-fit pl-[22px] pr-[18px] translate-x-4 z-10 flex">
                      {message} <button><EditIcon /></button>
                    </div>
                  </div>
    )
}