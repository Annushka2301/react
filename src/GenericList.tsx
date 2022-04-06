import React from "react";

interface IItem {
  value: string;
  id: string;
  onClick: (id: string) => void;
}

interface IMyListProps {
  list: IItem[];
}

export function MyList ({ list }: IMyListProps) {
  return (
    <ul>
      {list.map((item: IItem) => (
        <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
      ))}
    </ul>
  )
}


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
