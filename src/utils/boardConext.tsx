import { createContext, useState, Dispatch, SetStateAction } from "react";

//@ts-ignore
export const boardContext = createContext<{
  boardName: String | null;
  setBoardName: Dispatch<SetStateAction<String | null>>;
}>();

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const [boardName, setBoardName] = useState<String | null>(null);
  const value = { boardName, setBoardName };
  return (
    <boardContext.Provider value={value}>{children}</boardContext.Provider>
  );
}
