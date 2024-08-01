import { FormValues, ITravelPreferences } from "@/types";
import React from "react";
import { useFormContext, FieldErrors } from "react-hook-form";

const TravelPreferences: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  const travelPreferencesErrors = (errors.travelPreferences ??
    {}) as FieldErrors<ITravelPreferences>;

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center mb-10 text-[#DCBF80]">
          Travel Preferences
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
        <div className="mb-5">
          <label className="font-semibold text-white ms-1">
            Departure Date
          </label>
          <input
            required
            className="border-2 border-white p-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
            type="date"
            {...register("travelPreferences.departureDate")}
          />
          {travelPreferencesErrors?.departureDate && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {travelPreferencesErrors.departureDate.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-white ms-1">Return Date</label>
          <input
            required
            className="border-2 border-white p-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
            type="date"
            {...register("travelPreferences.returnDate")}
          />
          {travelPreferencesErrors?.returnDate && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {travelPreferencesErrors.returnDate.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label className="font-semibold text-white ms-1">
            Accommodation Preference
          </label>
          <select
            required
            className="border-2 border-white p-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
            {...register("travelPreferences.accommodation")}
          >
            <option value="">Select Accommodation</option>
            <option value="Space Hotel">Space Hotel</option>
            <option value="Martian Base">Martian Base</option>
          </select>
          {travelPreferencesErrors?.accommodation && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {travelPreferencesErrors.accommodation.message}
            </p>
          )}
        </div>
        <div className="mb-5 lg:col-span-2">
          <label className="font-semibold text-white ms-1">
            Special Requests
          </label>
          <textarea
            required
            className="h-32 border-2 border-white p-2 rounded-2xl w-full focus:border-2 focus:border-[#DF0000] outline-none px-3"
            placeholder="Have Any Special Request You Can Tell Us"
            {...register("travelPreferences.specialRequests")}
          />
          {travelPreferencesErrors?.specialRequests && (
            <p className="ms-2 mt-1 text-red-500 text-xs">
              {travelPreferencesErrors.specialRequests.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelPreferences;
