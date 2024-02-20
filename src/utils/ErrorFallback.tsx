import { FallbackProps } from "react-error-boundary";

export const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  // replaceErrorBoundary() を呼び出してエラー境界をリセットし、レンダリングを再試行します。

  return (
    <div role="alert">
      <p>問題が発生しました: </p>
      <pre style={{ color: "red" }}> {error.message} </pre>
    </div>
  );
};
