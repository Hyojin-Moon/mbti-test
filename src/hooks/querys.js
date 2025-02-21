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
  return useMutation({
    mutationFn: ( id, visibility ) => updateTestResultVisibility(id, visibility),
  });
};

export const useDeleteTestResult = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTestResult(id),
    onSuccess: () => {
      queryClient.invalidateQueries("testResults");
    }
  });
};