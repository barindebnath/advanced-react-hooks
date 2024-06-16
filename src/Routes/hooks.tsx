import UseCallbackHook from "../pages/UseCallbackHook";
import UseMemoHook from "../pages/UseMemoHook";
import UseRefHook from "../pages/UseRefHook";

export default [
  { name: "useRef", path: "/useref", component: <UseRefHook /> },
  { name: "useMemo", path: "/usememo", component: <UseMemoHook /> },
  {
    name: "useCallback",
    path: "/usecallback",
    component: <UseCallbackHook />,
  },
];
