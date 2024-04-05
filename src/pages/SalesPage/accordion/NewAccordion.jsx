import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "-rotate-90" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function NewAccordions() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <main className="max-w-[600px]">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-md px-3 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Introduction to Zero Call Close
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
            <p className="text-[#6476BA] px-3">
              {" "}
              A corporate retreat can serve as a way for remote companies to
              come together in person and for regular companies to take a break
              from the office and spend quality time together. It allows
              employees to bond and connect with their co-workers in different
              settings.Corporate retreats enables employees to get together in a
              chosen location outside the office for some days to have different
              activities, ranging from fun activities to productive sessions.The
              fun activities provide a team-bonding experience, while the
              productive sessions allow employers to clarify company culture,
              company goals/ missions, and employee roles
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-md px-3 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Identifying and Qualifying Prospects
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
            <p className="text-[#6476BA] px-3">
              {" "}
              A corporate retreat can serve as a way for remote companies to
              come together in person and for regular companies to take a break
              from the office and spend quality time together. It allows
              employees to bond and connect with their co-workers in different
              settings.Corporate retreats enables employees to get together in a
              chosen location outside the office for some days to have different
              activities, ranging from fun activities to productive sessions.The
              fun activities provide a team-bonding experience, while the
              productive sessions allow employers to clarify company culture,
              company goals/ missions, and employee roles
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="text-md px-3 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Crafting Compelling Offers
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
            <p className="text-[#6476BA] px-3">
              {" "}
              A corporate retreat can serve as a way for remote companies to
              come together in person and for regular companies to take a break
              from the office and spend quality time together. It allows
              employees to bond and connect with their co-workers in different
              settings.Corporate retreats enables employees to get together in a
              chosen location outside the office for some days to have different
              activities, ranging from fun activities to productive sessions.The
              fun activities provide a team-bonding experience, while the
              productive sessions allow employers to clarify company culture,
              company goals/ missions, and employee roles
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="text-md px-3 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Utilizing the Step-by-Step Framework
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
            <p className="text-[#6476BA] px-3">
              {" "}
              A corporate retreat can serve as a way for remote companies to
              come together in person and for regular companies to take a break
              from the office and spend quality time together. It allows
              employees to bond and connect with their co-workers in different
              settings.Corporate retreats enables employees to get together in a
              chosen location outside the office for some days to have different
              activities, ranging from fun activities to productive sessions.The
              fun activities provide a team-bonding experience, while the
              productive sessions allow employers to clarify company culture,
              company goals/ missions, and employee roles
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="text-md px-3 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Handling Objections Without Phone Conversations
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
            <p className="text-[#6476BA] px-3">
              {" "}
              A corporate retreat can serve as a way for remote companies to
              come together in person and for regular companies to take a break
              from the office and spend quality time together. It allows
              employees to bond and connect with their co-workers in different
              settings.Corporate retreats enables employees to get together in a
              chosen location outside the office for some days to have different
              activities, ranging from fun activities to productive sessions.The
              fun activities provide a team-bonding experience, while the
              productive sessions allow employers to clarify company culture,
              company goals/ missions, and employee roles
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className="text-md px-3 bg-[#FAFBFF] text-[#0027BA] hover:bg-[#E5E7EB] hover:text-[#0027BA] cursor-pointer transition-colors"
          >
            Closing Techniques for Premium Offers
          </AccordionHeader>
          <AccordionBody className="bg-[#FAFBFF]">
            <p className="text-[#6476BA] px-3">
              {" "}
              A corporate retreat can serve as a way for remote companies to
              come together in person and for regular companies to take a break
              from the office and spend quality time together. It allows
              employees to bond and connect with their co-workers in different
              settings.Corporate retreats enables employees to get together in a
              chosen location outside the office for some days to have different
              activities, ranging from fun activities to productive sessions.The
              fun activities provide a team-bonding experience, while the
              productive sessions allow employers to clarify company culture,
              company goals/ missions, and employee roles
            </p>
          </AccordionBody>
        </Accordion>
      </main>
    </>
  );
}
