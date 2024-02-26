import { create } from "zustand";

export interface valueType {
  label: string;
  value: any;
}

type Store = {
  startChecking: boolean;
  setStartChecking: (boolean: boolean) => void;
  errorObj: Record<string, boolean> | null;
  setErrorObj: (instanceId: string, boolean: boolean) => void;
  values: Record<string, valueType> | null;
  setValues: (instanceId: string, value: valueType) => void;
};

const useErrorCheck = create<Store>()((set) => ({
  startChecking: false,
  setStartChecking: (boolean: boolean) =>
    set(() => ({ startChecking: boolean })),
  errorObj: null,
  setErrorObj: (instanceId: string, boolean: boolean) =>
    set((state) => ({
      errorObj: updateErrorCheck(instanceId, boolean, state.errorObj),
    })),
  values: null,
  setValues: (instanceId: string, value: valueType) =>
    set((state) => ({ values: updateValues(instanceId, value, state.values) })),
}));

function updateErrorCheck(
  instanceId: string,
  boolean: boolean,
  errorObj: Record<string, boolean> | null
) {
  const obj = { ...errorObj };
  obj[instanceId] = boolean;
  return obj;
}

function updateValues(
  instanceId: string,
  value: valueType,
  values: Record<string, valueType> | null
) {
  const obj = { ...values };
  obj[instanceId] = value;
  return obj;
}

export default useErrorCheck;
