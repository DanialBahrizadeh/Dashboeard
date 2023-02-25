import type { FC } from "react";
import type { Data } from "../model/Data";
import type { PeriodTimes } from "../model/PeriodTimes";
import {
  Ellipsis,
  ExerciseIcon,
  PlayIcon,
  SelfCareIcon,
  SocialIcon,
  StudyIcon,
  WorkIcon,
} from "./Icons";
interface ItemProps {
  item: Data;
  period: PeriodTimes;
}
type Key = "work" | "play" | "study" | "exercise" | "social" | "self-care";
const Item: FC<ItemProps> = ({ item, period }) => {
  const obj = {
    work: {
      Icon: WorkIcon,
      color: "bg-primary-red-work",
    },
    play: {
      Icon: PlayIcon,
      color: "bg-primary-blue",
    },
    study: {
      Icon: StudyIcon,
      color: "bg-primary-red-study",
    },
    exercise: {
      Icon: ExerciseIcon,
      color: "bg-primary-green",
    },
    social: {
      Icon: SocialIcon,
      color: "bg-primary-violet",
    },
    "self-care": {
      Icon: SelfCareIcon,
      color: "bg-primary-orange",
    },
  };
  const key = item.title.toLocaleLowerCase().replace(/\s/g, "-") as Key;
  const info = obj[key];
  console.log(info);
  return (
    <div className="bg-neutral-blue-dark rounded-b-2xl flex flex-col justify-center px-5 relative rounded-t-2xl">
      <div
        className={`absolute w-full h-full -top-12 left-0 rounded-t-2xl ${info.color} flex justify-end pr-5 -z-10`}
      >
        <span className="overflow-hidden">
          <info.Icon />
        </span>
      </div>
      <div className="flex justify-between">
        <h1 className="text-white font-medium">{item.title}</h1>
        <span className="grid place-content-center">
          <Ellipsis />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-white text-3xl font-light">
          {item.timeframes[period].current}hrs
        </span>
        <span className="text-base grid place-content-center">{`Last ${
          period === "daily" ? "day" : period.slice(0, -2)
        } - ${item.timeframes[period].previous}hrs`}</span>
      </div>
    </div>
  );
};

export default Item;
