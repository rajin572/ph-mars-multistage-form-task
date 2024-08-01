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
import { createVisitor } from "@/actions/createVisitor";
import { toast } from "sonner";

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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const toastId = toast.loading("Try To Create Your Booking....");
    try {
      const res = await createVisitor(data);
      if (res) {
        toast.success(res.message, {
          id: toastId,
          duration: 1000,
        });
        methods.reset();
      } else {
        throw new Error("Something Want Wrong");
      }
    } catch (error) {
      toast.error(String(error), {
        id: toastId,
        duration: 1500,
      });
    }
  };

  return (
    <div className="py-20 bg-slate-200">
      <div>
        <h1 className="text-3xl md:text-5xl text-[#273969] text-center font-bold mb-2">
          Application Form
        </h1>
        <p className="w-40 h-2 rounded-xl bg-[#DF0000] mx-auto  mb-10"></p>
      </div>
      <Container className="max-w-[1000px]">
        <div className="border-2 shadow-md p-5 rounded bg-[#273969]">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="p-4">
              {stage === 0 && <PersonalInformation />}
              {stage === 1 && <TravelPreferences />}
              {stage === 2 && <HealthAndSafety />}

              <div className="flex justify-between mt-4">
                {stage > 0 && (
                  <Button
                    className="bg-[#DCBF80] text-[#273969] hover:text-[#273969] hover:bg-[#DCBF80]"
                    type="button"
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                )}
                {stage < 2 && (
                  <Button
                    className="bg-[#DCBF80] text-[#273969] hover:text-[#273969] hover:bg-[#DCBF80]"
                    type="button"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
                {stage === 2 && (
                  <Button
                    className="bg-[#DCBF80] text-[#273969] hover:text-[#273969] hover:bg-[#DCBF80]"
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
