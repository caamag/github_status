import { useState } from "react";
import { getUserData } from "../service/github";
import { useUser } from "../context/UserContext";
import { toast } from "react-toastify";

export const useData = () => {
  const { saveUser } = useUser();

  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (userName: string) => {
    setLoading(true);

    try {
      const response = await getUserData(userName);
      toast.success("Usuário encontrado com sucesso.");
      saveUser(response.data);
    } catch (error: any) {
      if (error.status === 404) {
        toast.error("Usuário não localizado.");
      } else {
        toast.error("Erro inesperado. Favor tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchData,
  };
};
