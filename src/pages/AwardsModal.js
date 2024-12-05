import { Modal } from "../container/components";

const titleData = {
  organization: "organization",
  award: "award",
  project: "project",
  year: "year",
};

const randomData = {
  organization: "CSS Awards",
  award: "Site of the Day",
  project: "Luminar",
  year: "2023",
};

const AwardsModal = () => {
  return (
    <Modal subTextTitle="(awards)">
      <div className="w-full overflow-auto px-5">
        <div className="w-full">
          <h3 className="py-36 font-semibold uppercase lg:p-36 lg:text-end lg:text-4xl">
            B®/Awrds.10 - 24©
          </h3>
          <div className="w-full">
            <div>
              <BulletText content={titleData} isTitle={true} />
            </div>
            <ul>
              {Array(40)
                .fill(0)
                .map(() => (
                  <li>
                    <BulletText content={randomData} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AwardsModal;

const BulletText = ({ isTitle = false, content }) => {
  return (
    <>
      <div className="grid grid-cols-2 text-xs uppercase lg:grid-cols-[25%,25%,40%,10%]">
        <div className="font-bold">
          <span>{content.organization}</span>
        </div>
        <div className={`${isTitle && "font-bold"}`}>
          <span>{content.award}</span>
        </div>
        <div className={`${isTitle && "font-bold"} `}>
          <span>{content.project}</span>
        </div>
        <div className={`${isTitle && "font-bold"}`}>
          <span>{content.year}</span>
        </div>
      </div>
      <div className="my-5 h-[1px] w-full bg-customBlack"></div>
    </>
  );
};
