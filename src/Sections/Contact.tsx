import { FC } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
export type contactInfoBoxProps = {
  Text: string;
  Icon: FC<{ size: number }>;
};

export const ContactInfoBox: FC<contactInfoBoxProps> = ({ Text, Icon }) => {
  return (
    <div className="flex h-16 items-center justify-center gap-3 rounded-md bg-primary p-4 shadow-lg">
      <Icon size={40}></Icon>
      <div className="text-xl text-action max-sm:text-sm"> {Text}</div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div id="contact" className="about section bd-container bg-secondary py-16">
      <h1 className="mb-16 text-center text-5xl font-medium">Contact Me</h1>
      <div className="flex justify-center gap-3 max-md:flex-col max-md:items-center">
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
