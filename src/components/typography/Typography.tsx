import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import type { AppDispatch, RootState } from "../../slices";
import {
  changeBackgroundText,
  changeBoldText,
  changeColorText,
  changeItalicText,
  changePositionText,
  changeUnderlineText,
  decrementSizeInterval,
  decrementSizeText,
  incrementSizeInterval,
  incrementSizeText,
} from "../../slices/newDiary";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3CenterLeftIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import TypographyItem from "../typographyItem/TypographyItem";

const TextColorOptions = [
  { name: "red", bg: "bg-red-500" },
  { name: "orange", bg: "bg-orange-400" },
  { name: "yellow", bg: "bg-yellow-300" },
  { name: "green", bg: "bg-green-700" },
  { name: "blue", bg: "bg-blue-600" },
  { name: "purple", bg: "bg-purple-900" },
  { name: "white", bg: "bg-white" },
  { name: "black", bg: "bg-black" },
];

type PropsType = {
  isShowSettings?: boolean;
};

const Typography = ({ isShowSettings }: PropsType) => {
  const [isOpenColorText, setIsOpenColorText] = useState(false);
  const [isOpenBackgroundText, setIsOpenBackgroundText] = useState(false);
  const { sizeText, intervalText, colorText, colorBackground } = useSelector(
    (state: RootState) => state.settingsDiary,
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      className={`w-full md:w-[30%] rounded-2xl flex-col p-4 gap-4 bg-white h-full md:flex ${isShowSettings ? "flex" : "hidden"}`}
    >
      <h2 className="mx-auto font-bold text-[12px] md:text-2xl">Типографика</h2>
      <hr className="w-[80%] mx-auto" />
      <div className="flex flex-col gap-4">
        <TypographyItem text="Размер" className="flex bg-green-400 rounded-2xl">
          <Button
            onClick={() => dispatch(decrementSizeText())}
            width="max-[440px]:w-3 w-4 md:w-8"
            height="max-[440px]:h-3 h-4 md:h-8"
            bg="bg-green-500"
            radius="rounded-xl"
            textColor="text-white"
          >
            -
          </Button>
          <div className="flex justify-center items-center max-[440px]:w-5 w-6 md:w-10">
            <p className="max-[440px]:text-[6px] text-[10px] md:text-[16px]">
              {sizeText}px
            </p>
          </div>
          <Button
            onClick={() => dispatch(incrementSizeText())}
            width="max-[440px]:w-3 w-4 md:w-8"
            height="max-[440px]:h-3 h-4 md:h-8"
            bg="bg-green-500"
            radius="rounded-xl"
            textColor="text-white"
          >
            +
          </Button>
        </TypographyItem>
        <TypographyItem
          text="Интервал"
          className="flex bg-green-400 rounded-2xl"
        >
          <Button
            onClick={() => dispatch(decrementSizeInterval())}
            width="max-[440px]:w-3 w-4 md:w-8"
            height="max-[440px]:h-3 h-4 md:h-8"
            bg="bg-green-500"
            radius="rounded-xl"
            textColor="text-white"
          >
            -
          </Button>
          <div className="flex justify-center items-center max-[440px]:w-5 w-6 md:w-10">
            <p className="max-[440px]:text-[6px] text-[10px] md:text-[16px]">
              {intervalText}
            </p>
          </div>
          <Button
            onClick={() => dispatch(incrementSizeInterval())}
            width="max-[440px]:w-3 w-4 md:w-8"
            height="max-[440px]:h-3 h-4 md:h-8"
            bg="bg-green-500"
            radius="rounded-xl"
            textColor="text-white"
          >
            +
          </Button>
        </TypographyItem>
        <TypographyItem text="Позиция" className="flex gap-1">
          <Bars3BottomLeftIcon
            className="max-[440px]:w-3 w-4 md:w-8 max-[440px]:h-3 h-4 md:h-8 bg-green-500 rounded-xl text-white cursor-pointer"
            onClick={() => dispatch(changePositionText("left"))}
          />
          <Bars3CenterLeftIcon
            className="max-[440px]:w-3 w-4 md:w-8 max-[440px]:h-3 h-4 md:h-8 bg-green-500 text-white rounded-xl cursor-pointer"
            onClick={() => dispatch(changePositionText("center"))}
          />
          <Bars3BottomRightIcon
            className="max-[440px]:w-3 w-4 md:w-8 max-[440px]:h-3 h-4 md:h-8 bg-green-500 text-white rounded-xl cursor-pointer"
            onClick={() => dispatch(changePositionText("right"))}
          />
        </TypographyItem>

        <TypographyItem text="Тип текста" className="flex gap-1">
          <BoldIcon
            className="max-[440px]:w-3 w-4 md:w-8 max-[440px]:h-3 h-4 md:h-8"
            onClick={() => dispatch(changeBoldText())}
          />
          <ItalicIcon
            className="max-[440px]:w-3 w-4 md:w-8 max-[440px]:h-3 h-4 md:h-8"
            onClick={() => dispatch(changeItalicText())}
          />
          <UnderlineIcon
            className="max-[440px]:w-3 w-4 md:w-8 max-[440px]:h-3 h-4 md:h-8"
            onClick={() => dispatch(changeUnderlineText())}
          />
        </TypographyItem>
        <TypographyItem
          text="Цвет текста"
          className="rounded-2xl w-5 h-5 md:w-10 md:h-10 relative border"
          onClick={() => setIsOpenColorText(true)}
          style={{ backgroundColor: colorText }}
        >
          {isOpenColorText && (
            <ul
              className={`w-44 h-20 border absolute bottom-14 -right-1 bg-white rounded-2xl flex flex-wrap justify-around gap-1 p-0.5 list-none`}
            >
              {TextColorOptions.map((item) => (
                <li key={item.name}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(changeColorText(item.name));
                      setIsOpenColorText(false);
                    }}
                    width="w-8"
                    height="h-8"
                    radius="rounded-xl"
                    border="border"
                    bg={item.bg}
                  />
                </li>
              ))}
            </ul>
          )}
        </TypographyItem>
        <TypographyItem
          text="Цвет фона"
          className="rounded-2xl w-5 h-5 md:w-10 md:h-10 relative border"
          onClick={() => setIsOpenBackgroundText(true)}
          style={{ backgroundColor: colorBackground }}
        >
          {isOpenBackgroundText && (
            <ul
              className={`w-44 h-20 border absolute bottom-14 -right-1 bg-white rounded-2xl flex flex-wrap justify-around gap-1 p-0.5 list-none`}
            >
              {TextColorOptions.map((item) => (
                <li key={item.name}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(changeBackgroundText(item.name));
                      setIsOpenBackgroundText(false);
                    }}
                    width="w-8"
                    height="h-8"
                    radius="rounded-xl"
                    border="border"
                    bg={item.bg}
                  />
                </li>
              ))}
            </ul>
          )}
        </TypographyItem>
      </div>
    </div>
  );
};

export default Typography;
