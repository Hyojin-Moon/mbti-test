import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTestResult, getTestResults, updateTestResultVisibility } from "../api/testResults";
import { QUERY_KEYS } from "../contansts/queryKeys";


export const useTestResults = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TEST_RESULTS], //캐싱
    queryFn: getTestResults, // API 호출끝나면 캐싱
  });
};

export const useUpdateTestVisibility = () => {

  const queryClient = useQueryClient();

  return useMutation({ //수정
    mutationFn: ({id, visibility}) => updateTestResultVisibility(id, visibility),
    onSuccess: () => {
      // 성공하면 갱신 (Mu , vali 짝궁)
      queryClient.invalidateQueries([QUERY_KEYS.TEST_RESULTS]);
    }
  });
};

export const useDeleteTestResult = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTestResult(id),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.TEST_RESULTS]);
    }
  });
};