import { useState } from "react";
import { getUserData } from "../service/github";
import { useUser } from "../context/UserContext";

export const useData = () => {
  const { saveUser } = useUser();

  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (userName: string) => {
    setLoading(true);

    try {
      const response = await getUserData(userName);
      saveUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchData,
  };
};
