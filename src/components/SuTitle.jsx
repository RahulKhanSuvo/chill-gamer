import { Fade } from "react-awesome-reveal";

const SuTitle = ({ title }) => {
  return (
    <div>
      <h2 className="font-medium bg-[#F80136] text-white text-xl py-4 px-4">
        <Fade triggerOnce={true} direction="up">
          {title}
        </Fade>
      </h2>
    </div>
  );
};

export default SuTitle;
