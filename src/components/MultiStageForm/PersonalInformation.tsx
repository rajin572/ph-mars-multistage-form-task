import { FormValues } from "@/types";
import React from "react";
import { useFormContext, FieldErrors } from "react-hook-form";

const PersonalInformation: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  const personalInfoErrors = (errors.personalInfo ?? {}) as FieldErrors<{
    fullName: string;
    dateOfBirth: string;
    nationality: string;
    email: string;
    phone: string;
  }>;

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center mb-10 text-[#DCBF80]">
          Personal Information
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <div className="mb-5">
          <label className="font-semibold text-white ms-1">Full Name</label>
          <input
            {...register("personalInfo.fullName")}
            placeholder="Enter Your Name"
            className="border-2 border-white py-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
          />
          {personalInfoErrors?.fullName && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {personalInfoErrors.fullName.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-white ms-1">Date of Birth</label>
          <input
            type="date"
            {...register("personalInfo.dateOfBirth")}
            className="border-2 border-white py-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
          />
          {personalInfoErrors?.dateOfBirth && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {personalInfoErrors.dateOfBirth.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-white ms-1">Nationality</label>
          <input
            {...register("personalInfo.nationality")}
            placeholder="Enter Your Nationality"
            className="border-2 border-white py-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
          />
          {personalInfoErrors?.nationality && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {personalInfoErrors.nationality.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-white ms-1">Email</label>
          <input
            type="email"
            {...register("personalInfo.email")}
            placeholder="Enter Your Email"
            className="border-2 border-white py-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
          />
          {personalInfoErrors?.email && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {personalInfoErrors.email.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-white ms-1">Phone</label>
          <input
            {...register("personalInfo.phone")}
            placeholder="Enter Your Phone Number"
            className="border-2 border-white py-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
          />
          {personalInfoErrors?.phone && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {personalInfoErrors.phone.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
