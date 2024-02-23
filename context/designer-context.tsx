"use client";

import { FormElement, FormElementInstance } from "@/interfaces/form-elements";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export type DesignerContextType = {
  elements: FormElementInstance[];
  addElement: (element: FormElementInstance) => void;
  addElementWithIndex: (index: number, element: FormElementInstance) => void;
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
    setElements((prev) => [...prev, element]);
  };

  const addElementWithIndex = (index: number, element: FormElementInstance) => {
    if (!elements) {
      return;
    }

    setElements((prev) => {
      const prevCopy = prev.slice();
      prevCopy.splice(index, 0, element);
      return prevCopy;
    });
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
    setSelectedElement(null);
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
        addElementWithIndex,
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
