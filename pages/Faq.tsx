import { GetStaticProps } from "next";
import { FaqModel } from "../api/Faq";
import AccordionComp from "../components/Accordion";
import { dbQuery } from "../db";

interface FaqProps {
  faq: FaqModel[];
}

export default function Faq({ faq }: FaqProps) {
  return (
    <div>
      {faq.map((f) => (
        <AccordionComp 
          key={f.id}
          id={f.id} 
          question={f.question} 
          answer={f.answer} 
        />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const faq = await dbQuery(`SELECT * FROM faq`)
  return { props: { faq: JSON.parse(JSON.stringify(faq)) } };
};
