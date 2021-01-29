import { GetStaticProps } from "next";
import { FaqModel } from "../api/Faq";
import { PrismaClient } from "@prisma/client";
import AccordionComp from "../components/Accordion";

interface FaqProps {
  faq: FaqModel[];
}

const prisma = new PrismaClient();

export default function Faq({ faq }: FaqProps) {
  return (
    <div>
      {faq.map((f) => (
        <AccordionComp 
          id={f.id} 
          question={f.question} 
          answer={f.answer} 
        />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const faq = await prisma.faq.findMany();
  return { props: { faq: faq } };
};
