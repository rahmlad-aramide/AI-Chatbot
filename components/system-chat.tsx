import { EditIcon } from "@/assets/svg"

export const SystemChat = ({time, date, message}: {time: string, date: string, message: string}) => {
    return (
        <div className="relative w-full max-w-[90%] mx-auto">
                    <div className="flex gap-2 z-20 -mb-4">
                      <div className="h-8 w-8 rounded-full bg-white text-black flex text-[10px] items-center justify-center z-10">
                        AI
                      </div>
                      <span className="text-[#EEEEEE] font-semibold text-xs leading-4">Response</span>
                      <span className="text-[#ABABAB99] text-[8px] mt-0.5">{date} ▪ {time}</span>
                    </div>
                    <div className="bg-[#424242] py-3 gap-3 rounded-2xl w-fit pl-[22px] pr-[18px] translate-x-4 z-10 flex">
                      {message} <button><EditIcon /></button>
                    </div>
                  </div>
    )
}