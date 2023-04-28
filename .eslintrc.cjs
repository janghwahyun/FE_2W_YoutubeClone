module.exports = {
  plugins: ["import", "react", "prettier", "react-hooks"], // 설치한 추가적인 규칙 설정
  extends: [
    "eslint:recommended", // eslint 자체적인 추천 설정 활용
    "plugin:react/recommended", // react plugin 추천 설정 활용
    "airbnb", // airbnb 설정 활용
    "plugin:prettier/recommended", // prettier plugin 추천 설정 활용
  ],
  env: {
    browser: true, // 실행 환경에 대해서 등록
    node: true,
    es2021: true,
  },
};
