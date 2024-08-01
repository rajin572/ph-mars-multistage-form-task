import { IVisitor } from "@/types";

export const createVisitor = async (data: IVisitor) => {
  const res = await fetch("http://localhost:5000/api/v1/visitor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const visitorInfo = await res.json();
  return visitorInfo;
};
