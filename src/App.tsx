import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Data } from "./model/Data";
import Item from "./components/Item";
import type { PeriodTimes } from "./model/PeriodTimes";
const App: React.FC = () => {
  const [period, setPeriod] = useState({
    daily: false,
    weekly: true,
    monthly: false,
  });

  const [peiodString, setPeriodString] = useState<PeriodTimes>("weekly");
  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    const collectData = async () => {
      const response = await fetch(
        "https://api.npoint.io/f6196c8cda9f18cd47de"
      );
      const dataFromApi = await response.json();
      if (dataFromApi) {
        setData(dataFromApi);
      }
    };
    collectData();
    return () => {
      setData(null);
    };
  }, []);
  function handleChange(time: PeriodTimes) {
    if (period[time]) return;
    setPeriod((prevState) => ({
      daily: false,
      weekly: false,
      monthly: false,
      [time]: !prevState[time],
    }));
    setPeriodString(time);
  }
  return (
    <div className="lg:grid lg:place-content-center lg:h-screen">
      <Helmet>
        <meta name="description" content="dashboard" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <title>Dashboeard</title>
        <body className="text-lg bg-neutral-blue-very-dark min-h-screen font-rubik lg:max-h-screen" />
      </Helmet>
      <div className="min-h-[150vh] grid grid-cols-1 grid-flow-row pt-8 px-4 text-neutral-blue-pale gap-16 lg:min-h-[67vh]  lg:grid-rows-2 lg:grid-flow-col">
        <div className="row-span-2 grid grid-rows-3 grid-cols-1 lg:min-w-[19rem]">
          <div className="row-span-2 bg-primary flex pl-8 items-center gap-4 rounded-2xl relative z-50 lg:flex-col lg:items-start lg:justify-start lg:pt-8 lg:gap-10">
            <img
              className="aspect-square w-20 rounded-full border-[3px] border-white lg:w-24"
              src="images/image-jeremy.png"
              alt="profile"
            />
            <div className="">
              <span>Report for</span>
              <h1 className="font-light text-white text-2xl font-rubik lg:text-5xl lg:whitespace-pre-wrap lg:w-12">
                Jeremy Robson
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 rounded-b-2xl relative bottom-2  bg-neutral-blue-dark lg:flex-col lg:items-start lg:pl-8 lg:gap-4">
            <div className="">
              <label
                htmlFor="daily"
                className={`cursor-pointer transition-colors ${
                  period.daily ? "text-white" : "opacity-80"
                }`}
              >
                Daily
              </label>
              <input
                className="hidden"
                id="daily"
                type="radio"
                name="period"
                value={"daily"}
                checked={period.daily}
                onChange={() => handleChange("daily")}
              />
            </div>
            <div>
              <label
                htmlFor="weekly"
                className={`cursor-pointer transition-colors ${
                  period.weekly ? "text-white" : "opacity-80"
                }`}
              >
                Weekly
              </label>
              <input
                className="hidden"
                id="weekly"
                type="radio"
                name="period"
                value={"weekly"}
                checked={period.weekly}
                onChange={() => handleChange("weekly")}
              />
            </div>
            <div>
              <label
                htmlFor="monthly"
                className={`cursor-pointer transition-colors ${
                  period.monthly ? "text-white" : "opacity-80"
                }`}
              >
                Monthly
              </label>
              <input
                className="hidden"
                id="monthly"
                type="radio"
                name="period"
                value={"monthly"}
                checked={period.monthly}
                onChange={() => handleChange("monthly")}
              />
            </div>
          </div>
        </div>
        {data?.map((item) => (
          <Item key={item.title} item={item} period={peiodString} />
        ))}
      </div>
    </div>
  );
};

export default App;
