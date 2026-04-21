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

  return (
    <section className="bg-purple-300 h-full z-10">
      <Container
        py="p-4"
        justify="justify-between"
        height="h-full"
        align="items-stretch"
      >
        <div
          className="w-[60%] rounded-2xl p-8 flex flex-col relative"
          style={{ backgroundColor: colorBackground }}
        >
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
            className={`w-full text-xl h-[80%]`}
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
            <p className="flex -rotate-90 whitespace-nowrap">16 марта</p>
          </div>
        </div>

        <Typography />
      </Container>
    </section>
  );
};
export default AddNewDay;
