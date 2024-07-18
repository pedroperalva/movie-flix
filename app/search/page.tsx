"use client";

import { useSearchParams } from "next/navigation";
import { api } from "../utils/api";
import { useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const query = searchParams.get("query");

  const [data, setData] = useState<any>(null);

  const handleFind = async () => {
    const response = await api.get(
      `/search/${type}?query=${query}&language=pt-BR&region=BR`
    );
    setData(response.data);
  };

  useEffect(() => {
    handleFind();
  }, []);

  console.log(data);

  return <div>teste</div>;
}
