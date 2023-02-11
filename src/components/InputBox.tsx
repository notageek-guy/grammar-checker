interface InputBoxProps {
  text: string;
  isLoading: boolean;
  generateText: () => void;
  setText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function InputBox({
  text,
  generateText,
  isLoading,
  setText,
}: InputBoxProps) {
  return (
    <div className="w-full max-w-2xl mx-auto ">
      <textarea
        className="w-full p-4 text-white bg-gray-700 rounded-md shadow-md"
        placeholder="Enter your text here"
        value={text}
        onChange={setText}
      />

      <button
        className="w-full px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
        onClick={generateText}
      >
        {isLoading ? "Checking..." : "Check"}
      </button>
    </div>
  );
}
