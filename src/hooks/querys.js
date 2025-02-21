import { useMutation, useQuery } from "@tanstack/react-query";
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
    mutationFn: ({ id, visibility }) => updateTestResultVisibility(id, visibility),
  });
}

export const useDeleteTestResult = () => {
  return useMutation({
    mutationFn: (id) => deleteTestResult(id),
  });
}