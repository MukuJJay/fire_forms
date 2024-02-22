"use client";

import { FormElement, FormElementInstance } from "@/interfaces/form-elements";
import { createContext, useState } from "react";

export type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (element: FormElementInstance) => void;
  removeElement: (elementId: string) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export const DesignerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const addElement = (element: FormElementInstance) => {
    if (elements) {
      setElements([...elements, element]);
    } else {
      setElements([element]);
    }
  };

  const removeElement = (elementId: string) => {
    setElements((prev) => prev.filter((elem) => elem.id !== elementId));
  };

  return (
    <DesignerContext.Provider value={{ elements, addElement, removeElement }}>
      {children}
    </DesignerContext.Provider>
  );
};
