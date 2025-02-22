import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const TestPage = () => {

  const navigate = useNavigate();
  const { user } = useAuthStore();

  // 테스트 결과는 이 페이지에서 한 번만 보여줄거니까 state사용
  // 고민된다.. 음.. 내 결과만 보는 page도 필요하다면?
  // 아니면 결과를 유지하며 사용 할려면?
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {

    const mbtiResult = calculateMBTI(answers);
    //결과 데이터 APi 구성
    const resultData = {
      userId: user.id,
      mbtiType: mbtiResult,
      description: mbtiDescriptions[mbtiResult],
      visibility: true,
    };

    try {
      const response = await createTestResult(resultData);
      setResult(response.mbtiType);
    } catch (error) {
      console.error(error);
    }

  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-black py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
