import { FC } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
export type contactInfoBoxProps = {
  Text: string;
  Icon: FC<{ size: number }>;
};

export const ContactInfoBox: FC<contactInfoBoxProps> = ({ Text, Icon }) => {
  return (
    <div className="bg-secondary p-4 h-16 min-w-82 rounded-md  flex justify-center items-center gap-3">
      <Icon size={40}></Icon>
      <div className="text-xl text-action"> {Text}</div>
    </div>
  );
};

export const Contact = () => {
  return (
    <section className="about section bd-container py-16 bg-primary">
      <h1 className="text-5xl text-center font-bold mb-16">Contact Me</h1>
      <div className="flex gap-3 justify-center">
        <ContactInfoBox
          Text="Ernes.Filipovic@gmail.com"
          Icon={MdOutlineMailOutline}
        ></ContactInfoBox>
        <ContactInfoBox
          Text="Gothenburg, Sweden "
          Icon={IoLocationOutline}
        ></ContactInfoBox>
      </div>
    </section>
  );
};
