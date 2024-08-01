import { FormValues, IHealthAndSafety } from "@/types";
import React from "react";
import { useFormContext, FieldErrors } from "react-hook-form";

const HealthAndSafety: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  const healthAndSafetyErrors = (errors.healthAndSafety ??
    {}) as FieldErrors<IHealthAndSafety>;

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center mb-10 text-[#DCBF80]">
          Health And Safety
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <div className="mb-5">
          <label className="font-semibold text-white">Health Declaration</label>
          <select
            required
            className="border-2 border-white p-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
            {...register("healthAndSafety.healthDeclaration")}
          >
            <option value="">Select Yes or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {healthAndSafetyErrors?.healthDeclaration && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {healthAndSafetyErrors.healthDeclaration.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-white">Emergency Contact</label>
          <input
            required
            className="border-2 border-white p-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
            {...register("healthAndSafety.emergencyContact")}
          />
          {healthAndSafetyErrors?.emergencyContact && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {healthAndSafetyErrors.emergencyContact.message}
            </p>
          )}
        </div>
        <div className="mb-5 lg:col-span-2">
          <label className="font-semibold text-white">Medical Conditions</label>
          <textarea
            className="h-32 border-2 border-white p-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
            placeholder="If You Have Any Medical Condition You Can Tell Us"
            {...register("healthAndSafety.medicalConditions")}
          />
          {healthAndSafetyErrors?.medicalConditions && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {healthAndSafetyErrors.medicalConditions.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthAndSafety;
