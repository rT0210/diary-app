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

const Typography = () => {
  const [isOpenColorText, setIsOpenColorText] = useState(false);
  const [isOpenBackgroundText, setIsOpenBackgroundText] = useState(false);
  const { sizeText, intervalText, colorText, colorBackground } = useSelector(
    (state: RootState) => state.settingsDiary,
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="w-[30%] rounded-2xl flex flex-col p-4 gap-4 bg-white">
      <h2 className="mx-auto font-bold text-2xl">Типографика</h2>
      <hr className="w-[80%] mx-auto" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold text-[20px]">Размер</p>
          <div className="flex bg-green-400 rounded-2xl">
            <Button
              onClick={() => dispatch(decrementSizeText())}
              width="w-8"
              height="h-8"
              bg="bg-green-500"
              radius="rounded-xl"
              textColor="text-white"
            >
              -
            </Button>
            <div className="flex justify-center items-center w-10">
              <p>{sizeText}px</p>
            </div>
            <Button
              onClick={() => dispatch(incrementSizeText())}
              width="w-8"
              height="h-8"
              bg="bg-green-500"
              radius="rounded-xl"
              textColor="text-white"
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-[20px]">Интервал</p>
          <div className="flex bg-green-400 rounded-2xl">
            <Button
              onClick={() => dispatch(decrementSizeInterval())}
              width="w-8"
              height="h-8"
              bg="bg-green-500"
              radius="rounded-xl"
              textColor="text-white"
            >
              -
            </Button>
            <div className="flex justify-center items-center w-10">
              <p>{intervalText}</p>
            </div>
            <Button
              onClick={() => dispatch(incrementSizeInterval())}
              width="w-8"
              height="h-8"
              bg="bg-green-500"
              radius="rounded-xl"
              textColor="text-white"
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-[20px]">Расположение</p>
          <div className="flex gap-1">
            <Bars3BottomLeftIcon
              className="w-8 h-8"
              onClick={() => dispatch(changePositionText("left"))}
            />
            <Bars3CenterLeftIcon
              className="w-8 h-8"
              onClick={() => dispatch(changePositionText("center"))}
            />
            <Bars3BottomRightIcon
              className="w-8 h-8"
              onClick={() => dispatch(changePositionText("right"))}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-[20px]">Тип текста</p>
          <div className="flex gap-1">
            <BoldIcon className="w-8 h-8" onClick={() => dispatch(changeBoldText())}/>
            <ItalicIcon className="w-8 h-8" onClick={() => dispatch(changeItalicText())}/>
            <UnderlineIcon className="w-8 h-8" onClick={() => dispatch(changeUnderlineText())}/>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-[20px]">Цвет текста</p>
          <div
            className={`rounded-2xl w-10 h-10 relative border`}
            style={{ backgroundColor: colorText }}
            onClick={() => setIsOpenColorText(true)}
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
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-[20px]">Цвет фона</p>
          <div
            className={`rounded-2xl w-10 h-10 relative border`}
            style={{ backgroundColor: colorBackground }}
            onClick={() => setIsOpenBackgroundText(true)}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
