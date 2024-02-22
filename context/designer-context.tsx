"use client";

import { FormElement, FormElementInstance } from "@/interfaces/form-elements";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (element: FormElementInstance) => void;
  removeElement: (elementId: string) => void;
  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
  updateElement: (element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export const DesignerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<FormElementInstance | null>(null);

  const addElement = (element: FormElementInstance) => {
    if (elements) {
      setElements([...elements, element]);
    } else {
      setElements([element]);
    }
  };

  const updateElement = (element: FormElementInstance) => {
    setElements((prev) => {
      const index = prev.findIndex((e) => e.id === element.id);
      const newElements = [...prev];
      newElements[index] = element;
      return newElements;
    });
  };

  const removeElement = (elementId: string) => {
    setElements((prev) => prev.filter((elem) => elem.id !== elementId));
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
        updateElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
};
