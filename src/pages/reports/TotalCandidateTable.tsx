import { useState } from "react";

interface PropsTable {
    // any props that come into the component
    row:any
}

const Row : React.FC<PropsTable> = ({row}) => {
  const [open, setOpen] = useState();

  return (
    <>
      <tr className="flex flex-row w-full py-1.5 text-base font-light" onClick={() => setOpen(open)}>
        <td className="flex w-1/2">{row.Stage}</td>
        <td className="justify-end flex w-1/4">{row.Qualified}</td>
        <td className="justify-end flex w-1/4">{row.Disqualified}</td>
      </tr>
      <tr>
        <td style={{ padding: 0 }} colSpan={3}>
          {open && <div>mi contenido :D</div>}
        </td>
      </tr>
    </>
  );
};

const rows = [
  {
    Stage: "Applied",
    Qualified: "3122",
    Disqualified: "1445"
  },
  {
    Stage: "Recommended",
    Qualified: "2164",
    Disqualified: "998"
  },
  {
    Stage: "Interview",
    Qualified: "443",
    Disqualified: "1721"
  },
  {
    Stage: "Offer",
    Qualified: "183",
    Disqualified: "260"
  },
  {
    Stage: "Hired",
    Qualified: "118",
    Disqualified: "65"
  }
];

export const  TotalCandidateTable =() => {
  return (
    
      <table className="w-full flex flex-col">
        <tr className="flex flex-row w-full py-4 text-base font-medium">
          <th className="flex w-1/2">Stage</th>
          <th className="justify-end flex w-1/4">Qualified</th>
          <th className="justify-end flex w-1/4">Disqualified</th>
        </tr>
        {rows.map((row) => (
          <Row row={row} />
        ))}
      </table>
 
  );
}
