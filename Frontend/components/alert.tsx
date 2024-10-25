"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./ui/animated-list";
import { AlertCircleIcon, XCircleIcon, TicketCheckIcon } from "lucide-react";
import { FC } from "react";
import { ForwardRefExoticComponent, SVGProps } from "react";
import { atom, useRecoilState, useRecoilValue} from "recoil";

// Item interface with icon type properly defined

// Example notifications data

//created atom for the visibility of alert
export const Visibility = atom({
  key:"visiblility",
  default:false,
});

//created atoms for the content of the alert
export const Success = atom({
  key:"success",
  default:false,
})

export const Message = atom({
  key:"message", 
  default:"",
})



interface Item {
  name: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  color: string;
}

const Noti: FC<Item> = ({ name, icon: Icon, color}) => {
    const[alertVisible, setAlertVisible] = useRecoilState(Visibility)

  if (!alertVisible) return null; // Hide the alert if not visible

  return (
    <figure
      className={cn(
        "absolute mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 left-[50px] right-[50px] top-[20px]",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <Icon className="text-lg" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
        </div>
      </div>
      {/* Close button */}
      <button
        onClick={() => setAlertVisible(false)} // Hide the alert on click
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
        aria-label="Close"
      >
        <XCircleIcon className="w-5 h-5" />
      </button>
    </figure>
  );
};

// Alert component using AnimatedList to display notifications
export function Alert({ className}: { className?: string}) {

  let icon = AlertCircleIcon;
  let color = "#ea4335";
  const success = useRecoilValue(Success);
  const message = useRecoilValue(Message);


  if (success){
    icon = TicketCheckIcon
    color = "#00A150"
  }
  interface Item {
    name: string;
    icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
    color: string;
  }

  const notifications: Item[] = [
    {
      name: message,
      icon: icon,
      color: color,
    },
  ];
  return (
    <AnimatedList className={className}>
      {notifications.map((item, idx) => (
        <Noti {...item} key={idx} />
      ))}
    </AnimatedList>
  );
}
