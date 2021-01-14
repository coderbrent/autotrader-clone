import { GetStaticProps } from "next";
import openDB from "../openDB";
import { FaqModel } from "./api/Faq";
import AccordionComp from "../components/Accordion";

interface FaqProps {
  faq: FaqModel[];
}

export default function Faq({ faq }: FaqProps) {
  return (
    <div>
      {faq.map(f => (
        <AccordionComp id={f.id} question={f.question} answer={f.answer} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const db = await openDB();
  const faq = await db.all("SELECT * FROM FAQ ORDER BY created DESC");
  return { props: { faq: faq } };
};
