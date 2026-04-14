import { useSelector } from "react-redux";
import Container from "../../components/container/Container";

import Typography from "../../components/typography/Typography";
import type { RootState } from "../../slices";

const AddNewDay = () => {
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
  return (
    <section className="bg-purple-500">
      <Container py="p-4" justify="justify-between">
        <div
          className="border w-[60%] h-[74vh] rounded p-8 flex flex-col"
          style={{ backgroundColor: colorBackground }}
        >
          <textarea
            className={`w-full font-bold resize-none text-2xl h-10 mb-4`}
            name=""
            id=""
            placeholder="название...(кратко)"
          ></textarea>
          <textarea
            key={colorText}
            className={`w-full text-xl grow`}
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
        </div>
        <Typography />
      </Container>
    </section>
  );
};
export default AddNewDay;
