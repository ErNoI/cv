import { FC } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
export type contactInfoBoxProps = {
  Text: string;
  Icon: FC<{ size: number }>;
};

export const ContactInfoBox: FC<contactInfoBoxProps> = ({ Text, Icon }) => {
  return (
    <div className=" flex bg-primary items-center p-4 h-16 rounded-md justify-center gap-3 shadow-lg">
      <Icon size={40}></Icon>
      <div className="text-xl max-sm:text-sm text-action"> {Text}</div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div id="contact" className="about section bd-container py-16 bg-secondary">
      <h1 className="text-5xl text-center font-medium mb-16">Contact Me</h1>
      <div className="flex max-md:flex-col gap-3 justify-center max-md:items-center">
        <ContactInfoBox
          Text="Ernes.Filipovic@gmail.com"
          Icon={MdOutlineMailOutline}
        ></ContactInfoBox>
        <ContactInfoBox
          Text="Gothenburg, Sweden "
          Icon={IoLocationOutline}
        ></ContactInfoBox>
      </div>
    </div>
  );
};
