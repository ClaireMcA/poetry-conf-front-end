// import { Button, Card, Heading, Paragraph } from "grommet";
// import { useState } from "react";
// import { BASE_URL } from "../lib/constants";

// interface Props {
//     selected: boolean;
//     paper: any;

// }
// export function SelectablePaper({ selected: initialSelected = false, paper }: Props) {
//     const { selected, setSelected } = useState(initialSelected);

//     function selectPaper() {
//         fetch(
//             `/api/papers/${paper._id}`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ register: true })
//             }
//         ).then(() => {
//             setSelected(true);
//         }).catch(() => {

//         });
//     }

//     function deselectPaper() {
//         fetch(
//             `/api/papers/${paper._id}`, {
//                 method: 'POST',
//                 body: JSON.stringify({ register: false })
//             }
//         ).then(() => {
//             setSelected(false);
//         }).catch(() => {

//         });
//     }

//     return (
//         <Card pad="medium" key={paper._id} flex={{grow: 1, shrink: 0}} style={{ flexBasis: 0}}> 
//             <Heading level="3" size="small">{ paper.title }</Heading>
//             <Paragraph>
//                 { paper.speaker.map((speaker: string) => (
//                     speaker + "/"
//                 ))}
//             </Paragraph>
//             { selected ?
//                 <Button onClick={deselectPaper}>Deselect</Button> :
//                 <Button onClick={selectPaper}>Select</Button> 
//             }
//     </Card>
//     )
// }
