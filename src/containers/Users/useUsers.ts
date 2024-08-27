import { useQuery } from "react-query";
import services from "./../../network/services.ts";

import { ENDPOINTS } from "./../../helpers/endpoints.ts";
import { QUERY_KEYS } from "./../../helpers/queryKeys.ts";

export const useUsers = (enabled) => {
  const { data, isFetching, isError } = useQuery(
    QUERY_KEYS.users,
    async () => await services.get(ENDPOINTS.users),
    { refetchOnWindowFocus: false, enabled }
  );

  const fetchedData = data?.data || null;

  return { data: fetchedData, isFetching, isError };
};
