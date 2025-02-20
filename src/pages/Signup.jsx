// import React from "react";
// import AuthForm from "../components/AuthForm";
// import { register } from "../api/auth";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();

//   // 완성된 로직들이 아니에요! 참고만 하세요!
//   const handleSignup = async (formData) => {
//     try {
//       await register(formData);
      
//     } catch (error) {
//       alert("회원가입에 실패했습니다. 다시 시도해주세요.");
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h1 >
//           회원가입
//         </h1>
//         <AuthForm mode="signup" onSubmit={handleSignup} />
//         <div>
//           <p>
//             이미 계정이 있으신가요?{" "}
//             <Link to="/login">
//               로그인
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from "react";

// // 회원가입인지 로그인인지 구분하기 위해 mode 를 props 로 받습니다.
// // onSubmit 도 회원가입과 로그인 페이지에서 각각 구현을 하고 props 로 넘겨줄 겁니다.
// const AuthForm = ({ mode, onSubmit }) => {
  
//   // 무엇을 formData 에 넣어야 할까요?
//   const [formData, setFormData] = useState({
		
//   });

//   const handleChange = (e) => {

//   };

//   const handleSubmit = (e) => {

//   };

//   // id 입력을 위한 input 만 힌트로 만들어 두었습니다. 참고해서 한번 만들어봅시다! 
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="id"
//         value={formData.id}
//         onChange={handleChange}
//         placeholder="아이디"
//         required
//       />
//       <input

//       />
//       {mode === "signup" && (
//         <input
//           type="text"
//           name="nickname"
//           value={formData.nickname}
//           onChange={handleChange}
//           placeholder="닉네임"
//           required
//           className="w-full p-4 border border-gray-300 rounded-lg"
//         />
//       )}
//       <button type=?????>
//         {mode === "login" ? "로그인" : "회원가입"}
//       </button>
//     </form>
//   );
// };

// export default AuthForm;
