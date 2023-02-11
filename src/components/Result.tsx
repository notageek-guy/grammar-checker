
interface ResultProps {
  inCorrectText: string;
  correctText: string;
}
export default function Result({ inCorrectText, correctText }: ResultProps) {
  return (
    <div className="max-w-2xl mx-auto w-full mt-4">
      <div className="bg-red-500 p-4 rounded-md shadow-md">
        <p className="text-white text-2xl">Incorrect Text</p>
        <p className="text-white font-bold">{inCorrectText}</p>
      </div>
      <div className="bg-green-500 p-4 rounded-md shadow-md mt-4">
        <p className="text-white text-2xl font-bold">Correct Text</p>
        <p className="text-white font-bold">{correctText}</p>
      </div>
    </div>
  );
}
