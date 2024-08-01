import { formSchema } from "@/schema/schema";
import { z } from "zod";

export type FormValues = z.infer<typeof formSchema>;

export interface IPersonalInfo {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phone: string;
}

export interface ITravelPreferences {
  departureDate: string;
  returnDate: string;
  accommodation: string;
  specialRequests?: string | undefined;
}

export interface IHealthAndSafety {
  healthDeclaration: string;
  emergencyContact: string;
  medicalConditions?: string | undefined;
}

export interface IVisitor {
  personalInfo: IPersonalInfo;
  travelPreferences: ITravelPreferences;
  healthAndSafety: IHealthAndSafety;
}

export interface IVisitorsData {
  _id: string;
  personalInfo: IPersonalInfo;
  travelPreferences: ITravelPreferences;
  healthAndSafety: IHealthAndSafety;
}
