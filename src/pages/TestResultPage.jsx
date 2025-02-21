import TestResultList from "../components/TestResultList";


function TestResultPage({user}) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary-color mb-6">
          테스트 결과 페이지
        </h1>
        <TestResultList user={user} />
    </div>
  )
}

export default TestResultPage