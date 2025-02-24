import { useState } from "react";


const AuthForm = ({ mode, onSubmit, initialData = {} }) => {

  const [formData, setFormData] = useState({
    id: initialData.id || "", //닉네임 수정모드
    password: mode === "login" ? "" : undefined,
    nickname: mode === "signup" || mode === "profile" ?
      initialData.nickname || "" : undefined,
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({ ...prev, avatar: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //formData를 부모 컴포넌트로 전달(login, signup)
    /*
    여기도 부모로 전달하는게 리액트의 방식은 아니지만
    생각해봤을 때 AuthForm은 단순 UI 역할을 해주고
    폼 데이터가 필요한 곳은 API, 상태등을 업데이트 해서 역할을 나눠야 함
    추가 기능이 필요하면 활용가능 (소셜로그인, 회원가입때 추가데이터 등)
    */
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {mode === "signup" ? "회원가입" : mode === "login" ? "로그인" : "정보 변경"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* 아이디 */}
        {mode === "signup" || mode === "login" ? (
          <div>
            <label className="block font-medium">아이디</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
        ) : (
          <div>
            <label className="block font-medium">아이디</label>
            <p className="w-full p-2 border rounded-md bg-gray-100">{formData.id}</p>
          </div>
        )}

        {/* 비밀번호 */}
        {(mode === "signup" || mode === "login") && (
          <div>
            <label className="block font-medium">비밀번호</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
        )}

        {/* 닉네임 */}
        {(mode === "signup" || mode === "profile") && (
          <div>
            <label className="block font-medium">닉네임</label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname || ""}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
        )}

        {/* 프로필 이미지 */}
        {(mode === "signup" || mode === "profile") && (
          <div>
            <label className="block font-medium">프로필 이미지</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          {mode === "signup" ? "회원가입" : mode === "login" ? "로그인" : "프로필 변경"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
