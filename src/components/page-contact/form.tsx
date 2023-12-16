import React, { FC } from "react";
import { Input } from "../ui/input";
import { User, MailIcon, MessageSquare, ArrowRightIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  return (
    <form
      action={"https://getform.io/f/7c5ec5e9-230f-43be-9962-30c6b80948d9"}
      method="POST"
      className="flex flex-col gap-y-4"
    >
      <div className="relative flex items-center">
        <Input type="name" id="name" name="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" name="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message Here" name="message" />
        <MessageSquare className="absolute right-6 top-4" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let&apos;s Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
