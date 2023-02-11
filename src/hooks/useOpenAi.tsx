import { useMutation } from "react-query";

import axios from "axios";

export default function useOpenAi(text: string) {
  const postData = async () => {
    try {
      const { data } = await axios.post(
        "/api/generate",
        { prompt: text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const { mutate, isLoading, isError, data, error } = useMutation(
    "generate",
    postData,
    {
      onSuccess: (data: any) => {
        console.log(data);
      },
    }
  );
  return { mutate, isLoading, isError, data, error };
}
