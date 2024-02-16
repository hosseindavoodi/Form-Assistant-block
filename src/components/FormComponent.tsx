import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./validationSchema";

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 p-10 lg:w-1/2 md:w-1/2 sm:w-full"
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
          {...register("phone")}
          className="border-[#dcdcdc] placeholder:text-[#929292] w-full rounded-lg border bg-white px-4 py-3 !ring-transparent"
        />
        {errors.phone && <p>{errors.phone.message?.toString()}</p>}
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="rounded-full bg-black text-white w-[150px] p-4 disabled:bg-slate-500"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
