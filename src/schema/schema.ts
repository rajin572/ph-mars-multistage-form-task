import { z } from "zod";

const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  nationality: z.string().min(1, "Nationality is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone is required"),
});
const travelPreferencesSchema = z.object({
  departureDate: z.string().min(1, "Departure Date is required"),
  returnDate: z.string().min(1, "Return Date is required"),
  accommodation: z
    .enum(["Space Hotel", "Martian Base"])
    .refine((val) => val !== undefined, {
      message: "Value must be Space Hotel or Martian Base",
    }),
  specialRequests: z
    .string()
    .min(1, "Special Requests or Preferences is required"),
});

const healthAndSafetySchema = z.object({
  healthDeclaration: z.enum(["Yes", "No"]).refine((val) => val !== undefined, {
    message: "Health Declaration must be Yes or No",
  }),
  emergencyContact: z
    .string()
    .min(1, "Emergency Contact Information is required"),
  medicalConditions: z.string().optional(),
});

export const formSchema = z.object({
  personalInfo: personalInfoSchema,
  travelPreferences: travelPreferencesSchema,
  healthAndSafety: healthAndSafetySchema,
});
