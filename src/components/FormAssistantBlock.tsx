import React from "react";

interface FormAssistantBlockProps {
  setValue: (name: string, value: any) => void;
}

export const FormAssistantBlock: React.FC<FormAssistantBlockProps> = ({
  setValue,
}) => {
  return (
    <div className="rounded-lg bg-neutral-300 p-8">
      <div className="flex flex-col gap-2">
        <strong className="mb-4">
          Great job! This field is not mandatory but will help if you fill it as
          well
        </strong>
        <label htmlFor="phoneAssistant">Phone Number</label>
        <input
          type="text"
          onChange={(e) => setValue("phone", e.target.value)}
          name="phone"
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
      </div>
    </div>
  );
};
