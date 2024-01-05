import reactDom from "react-dom";
import MyNextJsExcelSheet from "./MyAppNextJsExcelSheet";
import LoginForm from "./page/Form/loginForm";
reactDom;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 main-set">
      <MyNextJsExcelSheet />
      {/* <LoginForm /> */}
    </main>
  );
}
