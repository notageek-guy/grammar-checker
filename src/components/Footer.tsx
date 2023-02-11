import { SiOpenai } from "react-icons/si";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  const goToOpenAi = () => {
    router.push("https://openai.com/blog/openai-api/");
  };
  return (
    <div className="fixed bottom-0 py-4 right-16">
      <button
        onClick={goToOpenAi}
        className="flex items-center gap-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 "
      >
        <SiOpenai size={20} />
        <span>Powered by OpenAI</span>
      </button>
    </div>
  );
}
