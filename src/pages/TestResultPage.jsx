import TestResultList from "../components/TestResultList";

function TestResultPage({ user }) {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <TestResultList user={user} />
    </div>
  );
}

export default TestResultPage;