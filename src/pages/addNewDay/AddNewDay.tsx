import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container/Container";

import Typography from "../../components/typography/Typography";
import type { RootState } from "../../slices";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { saveEntry } from "../../slices/diarySlice";

const AddNewDay = () => {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");
  const savedEntry = useSelector((state: RootState) =>
    state.diary.entries.find((entry) => entry.date === date),
  );
  const [title, setTitle] = useState<string>(savedEntry?.title || "");
  const [content, setContent] = useState<string>(savedEntry?.content || "");
  const [isShowSettings, setIsShowSettings] = useState<boolean>(false)
  const {
    sizeText,
    intervalText,
    colorText,
    positionText,
    colorBackground,
    isBold,
    isItalic,
    isUnderline,
  } = useSelector((state: RootState) => state.settingsDiary);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSave = () => {
    if (!date) {
      alert("дата не найдена");
      return;
    }
    const entry = {
      date: date,
      title: title,
      content: content,
      updatedAt: new Date().toISOString(),
    };
    dispatch(saveEntry(entry));
    alert("успешно сохранено")
    navigate(-1)
  };

  const handleSettings = () => {
    setIsShowSettings((prev) => !prev)
  }

  return (
    <section className="bg-purple-300 h-full z-10">
      <Container
        py="p-4"
        justify="justify-around"
        height="h-full"
        align="items-stretch"
      >
        <div
          className="w-[80%] rounded-2xl p-8 flex flex-col relative mx-auto md:mx-0 md:w-[60%]"
          style={{ backgroundColor: colorBackground }}
        >
          <button className="absolute top-4 right-4 md:hidden cursor-pointer" onClick={handleSettings}>
            <hr className="h-1 w-5"/>
            <hr className="h-1 w-5"/>
            <hr className="h-1 w-5"/>
          </button>
          {isShowSettings && (
            <div className={`absolute w-[50%] h-fit top-10 right-0 flex justify-end menu-slide`}>
              <Typography isShowSettings={isShowSettings}/>
            </div>
          )}
          <textarea
            className={`w-full font-bold resize-none text-2xl h-10 mb-4 `}
            name=""
            id=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="название...(кратко)"
          ></textarea>
          <textarea
            key={colorText}
            className={`w-full text-xl h-[80%] resize-none`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              fontSize: `${sizeText}px`,
              lineHeight: `${intervalText}`,
              color: `${colorText}`,
              textAlign: `${positionText}`,
              fontStyle: isItalic ? "italic" : "normal",
              fontWeight: isBold ? "bold" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
            }}
            name=""
            id=""
            placeholder="что сегодня делал..."
          ></textarea>
          <button onClick={handleSave}>сохранить</button>
          <div className="w-14 h-30 border absolute top-0 -left-8 rounded-2xl -z-10 bg-red-400 flex justify-end items-center">
            <p className="flex -rotate-90 whitespace-nowrap">{date}</p>
          </div>
        </div>

        <Typography />
      </Container>
    </section>
  );
};
export default AddNewDay;
