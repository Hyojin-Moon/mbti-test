import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTestResult, getTestResults, updateTestResultVisibility } from "../api/testResults";
import { QUERY_KEYS } from "../contansts/queryKeys";




export const useTestResults = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TEST_RESULTS],
    queryFn: getTestResults,
  });
};

export const useUpdateTestVisibility = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({id, visibility}) => updateTestResultVisibility(id, visibility),
    onSuccess: () => {
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