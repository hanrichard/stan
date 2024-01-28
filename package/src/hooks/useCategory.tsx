import { useState, useEffect } from "react";

export interface DataProps {
  total?: number;
  entries?: EntriesProps[];
}

export interface EntriesProps {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

export interface AppStateProps {
  isFetching: boolean;
  error?: string;
  data?: DataProps;
}

export const useCategory = () => {
  const [appState, setAppState] = useState<AppStateProps>({
    data: undefined,
    isFetching: true,
    error: undefined,
  });

  const handleFetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/sample.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAppState({
        data: data,
        isFetching: false,
        error: undefined,
      });
    } catch (err) {
      setAppState({
        data: undefined,
        isFetching: false,
        error: (err as Error)?.message,
      });
    }
  };

  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data: appState.data,
    isFetching: appState.isFetching,
    error: appState.error,
  };
};
