import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const TestPage = () => {

  const navigate = useNavigate();
  const { user } = useAuthStore();

  // 테스트 결과는 이 페이지에서 한 번만 보여줄거니까 state사용
  // 고민된다.. 음.. 내 결과만 보는 page도 필요하다면?
  // 아니면 결과를 유지하며 사용 할려면?
  const [result, setResult] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // 모달 상태관리

  const handleTestSubmit = async (answers) => {

    const mbtiResult = calculateMBTI(answers);
    //결과 데이터 APi 구성
    const resultData = {
      userId: user.id,
      mbtiType: mbtiResult,
      description: mbtiDescriptions[mbtiResult],
      visibility: true,
      nickname: user.nickname,
      avatar: user.avatar,
    };

    try {
      const response = await createTestResult(resultData);
      setResult(response.mbtiType);
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }

  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="card-responsive max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : null}

        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 backdrop-blur-sm bg-black/5">
              <DialogPanel
                transition
                className="w-full max-w-lg h-auto rounded-xl bg-black/70 p-8 backdrop-blur-2xl shadow-xl shadow-black/50 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle as="h3" className="text-2xl font-semibold text-white text-center">
                  당신의 MBTI 결과는?
                </DialogTitle>
                <p className="mt-4 text-4xl font-bold text-center text-[#FF5A5F]">
                  {result}
                </p>
                <p className="mt-2 text-m text-white/70 ">
                  {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
                </p>
                <div className="mt-4">
                  <button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    닫기
                  </button>
                  <button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={handleNavigateToResults}
                  >
                    결과 페이지로 이동
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default TestPage;
