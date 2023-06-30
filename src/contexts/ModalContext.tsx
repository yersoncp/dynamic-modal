import React, { createContext, ReactNode, useContext, useMemo, useReducer } from "react";

interface FunctionProps extends State {
  openModal: (view: ReactNode) => void;
  closeModal: () => void;
}

interface State {
  modalView: ReactNode | null;
}

const initialState = {
  modalView: null,
};

type Action =
  | {
    type: "OPEN_MODAL"
    view: ReactNode
  }
  | {
    type: "CLOSE_MODAL"
  }

export const ModalContext = createContext<State>(initialState);
ModalContext.displayName = "ModalContext";

function modalReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        modalView: null,
      };
    }
  }
}

type ModalProviderProps = {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const openModal = (view: ReactNode) => dispatch({ type: "OPEN_MODAL", view });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

  const value = useMemo(
    () => ({
      ...state,
      openModal,
      closeModal,
    }),
    [state],
  );

  return <>
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  </>
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }

  return context as FunctionProps;
};
