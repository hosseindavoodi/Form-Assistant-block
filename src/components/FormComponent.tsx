import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./validationSchema";
import { FormAssistantBlock } from "./FormAssistantBlock";

const FormComponent: React.FC = () => {
  const [phoneFieldIsFilled, setPhoneFieldIsFilled] = useState(false);
  const [isMainForm, setIsMainForm] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const assistantBlockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleInsideClick = (event: MouseEvent) => {
      if (
        assistantBlockRef.current &&
        assistantBlockRef.current.contains(event.target as Node)
      ) {
        setIsMainForm(false);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        assistantBlockRef.current &&
        !assistantBlockRef.current.contains(event.target as Node)
      ) {
        setIsMainForm(true);
      }
    };

    document.addEventListener("click", handleInsideClick);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleInsideClick);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    watch((value) => {
      if (value.phone && isMainForm) {
        setPhoneFieldIsFilled(true);
      } else {
        setPhoneFieldIsFilled(false);
      }
    });
  }, [phoneFieldIsFilled, watch, isMainForm]);

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-12 p-10 lg:w-1/2 md:w-1/2 sm:w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          {...register("firstName")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
        {errors.firstName && <p>{errors.firstName.message?.toString()}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          {...register("lastName")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
        {errors.lastName && <p>{errors.lastName.message?.toString()}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email*</label>
        <input
          type="text"
          {...register("email")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
        {errors.email && <p>{errors.email.message?.toString()}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          {...register("phone", {})}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="job">What is your job?</label>
        <input
          type="text"
          {...register("job")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
      </div>

      {!phoneFieldIsFilled && (
        <div ref={assistantBlockRef}>
          <FormAssistantBlock setValue={setValue} />
        </div>
      )}

      <button
        type="submit"
        disabled={!isValid}
        className="rounded-full bg-black text-white w-[150px] p-4 disabled:bg-slate-300"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
