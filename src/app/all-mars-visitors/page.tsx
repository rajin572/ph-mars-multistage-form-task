import Container from "@/components/ui/Container";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IVisitorsData } from "@/types";

const AllMarsVisitors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/visitors", {
    cache: "no-store",
  });

  const visitorsData = await res.json();
  return (
    <div className="my-20">
      <div>
        <h1 className="text-2xl md:text-4xl text-[#273969] text-center font-bold mb-2">
          OUR ALL VISITORS
        </h1>
        <p className="w-40 h-2 rounded-xl bg-[#DF0000] mx-auto  mb-10"></p>
      </div>
      <Container>
        <Table>
          <TableCaption className="mt-10">
            A list of All Mars Visitors
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>N0.</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>Nationality</TableHead>
              <TableHead>Departure Date</TableHead>
              <TableHead>Return Date</TableHead>
              <TableHead>Accommodation</TableHead>
              <TableHead>Health Declaration</TableHead>
              <TableHead className="text-right">Emergency Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visitorsData?.data.map((visitor: IVisitorsData, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{visitor?.personalInfo?.fullName}</TableCell>
                <TableCell>{visitor?.personalInfo?.nationality}</TableCell>
                <TableCell>
                  {visitor?.travelPreferences?.departureDate}
                </TableCell>
                <TableCell>{visitor?.travelPreferences?.returnDate}</TableCell>
                <TableCell>
                  {visitor?.travelPreferences?.accommodation}
                </TableCell>
                <TableCell>
                  {visitor?.healthAndSafety?.healthDeclaration}
                </TableCell>
                <TableCell className="text-right">
                  {visitor?.healthAndSafety?.emergencyContact}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default AllMarsVisitors;
