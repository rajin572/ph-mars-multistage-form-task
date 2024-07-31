"use client";

import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schema/schema";
import { FormValues } from "@/types";
import PersonalInformation from "./PersonalInformation";
import TravelPreferences from "./TravelPreferences";
import HealthAndSafety from "./HealthAndSafety";
import Container from "../ui/Container";
import { Button } from "../ui/button";

const MultiStageForm: React.FC = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const [stage, setStage] = useState(0);

  const handleNext = () => {
    setStage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStage((prev) => prev - 1);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const res = {
      personalInfo: data.personalInfo,
      travelPreferences: data.travelPreferences,
      healthAndSafety: data.healthAndSafety,
    };
  };

  return (
    <div>
      <Container>
        <div className="border-2 shadow-md p-5 rounded bg-[#273969]">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="p-4">
              {stage === 0 && <PersonalInformation />}
              {stage === 1 && <TravelPreferences />}
              {stage === 2 && <HealthAndSafety />}

              <div className="flex justify-between mt-4">
                {stage > 0 && (
                  <Button
                    className="bg-white text-[#273969] hover:text-[#273969] hover:bg-white"
                    type="button"
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                )}
                {stage < 2 && (
                  <Button
                    className="bg-white text-[#273969] hover:text-[#273969] hover:bg-white"
                    type="button"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
                {stage === 2 && (
                  <Button
                    className="bg-white text-[#273969] hover:text-[#273969] hover:bg-white"
                    type="submit"
                  >
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
};

export default MultiStageForm;
