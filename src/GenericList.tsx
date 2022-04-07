import React from "react";
import { generateRandomString } from "./utils/react/generateRandom";

// interface IItemm {
//   value: string;
//   id: string;
//   onClick: (id: string) => void;
// }

// interface IMyListProps {
//   list: IItemm[];
// }

// export function MyList ({ list }: IMyListProps) {
//   return (
//     <ul>
//       {list.map((item: IItemm) => (
//         <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//       ))}
//     </ul>
//   )
// }


// глобально onClick

// interface IItem {
//   value: string;
//   id: string;
// }

// interface IMyListProps {
//   list: IItem[];
//   onClick: (id: string) => void;
// }

// export function MyList ({ list, onClick }: IMyListProps) {
//   return (
//     <ul>
//       {list.map((item: IItem) => (
//         <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
//       ))}
//     </ul>
//   )
// }


//

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick, className, id, href}) => (
        <As className={className} onClick={() => onClick(id)} key={id} href={href}>
          {text}
        </As>
      ))}
    </>
  )
}
