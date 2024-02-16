import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./validationSchema";

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

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
        {touchedFields.firstName && errors.firstName && (
          <p>{errors.firstName.message?.toString()}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          {...register("lastName")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
        {touchedFields.lastName && errors.lastName && (
          <p>{errors.lastName.message?.toString()}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email*</label>
        <input
          type="text"
          {...register("email")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
        {touchedFields.email && errors.email && (
          <p>{errors.email.message?.toString()}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          {...register("phone")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone">what is your job?</label>
        <input
          type="text"
          {...register("job")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
      </div>

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
