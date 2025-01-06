import { Fade } from "react-awesome-reveal";

const SuTitle = ({ title }) => {
  return (
    <div>
      <Fade direction="up">
        <h2 className="font-medium bg-[#F80136] text-white text-xl py-4 px-4">
          {title}
        </h2>
      </Fade>
    </div>
  );
};

export default SuTitle;
