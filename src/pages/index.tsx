import Head from "next/head";
import useOpenAi from "@/hooks/useOpenAi";
import { Fragment, useEffect, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Footer from "@/components/Footer";
import InputBox from "@/components/InputBox";
import Result from "@/components/Result";
import { useRouter } from "next/router";
import axios from "axios";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();
  const goToGithub = () => {
    router.push("https://github.com/notageek-guy/grammar-checker");
  };
  const [text, setText] = useState<string>("");
  const [correct, setCorrect] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const memoText = useMemo(() => text, [text]);
  const generateText = async () => {
    setLoading(true);
    try {
      const data = await axios.post(
        "/api/generate",
        {
          prompt: text,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCorrect(data.data.text);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (text.length === 0) {
      setCorrect("");
    }
    return () => {
      setCorrect("");
    };
  }, [text]);
  return (
    <>
      <Head>
        <title>Correct-Me</title>
        <meta name="description" content="Correct-Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen bg-gradient-to-br from-black to-gray-800">
          <div className="p-4">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center justify-between">
                <div className="ml-4">
                  <h1 className="text-4xl font-bold text-white ">Correct Me</h1>
                  <p className="text-gray-300">AI based grammar checker</p>
                </div>
                <div>
                  <FaGithub
                    onClick={goToGithub}
                    size={30}
                    className="text-white"
                  />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex flex-col justify-center max-w-4xl gap-4 mx-auto">
                  <InputBox
                    text={memoText}
                    setText={handleInput}
                    generateText={generateText}
                    isLoading={loading}
                  />
                  {correct ? (
                    <Result inCorrectText={text} correctText={correct} />
                  ) : (
                    <Fragment>
                      <div className="max-w-4xl mx-auto mt-4">
                        <p className="text-2xl text-white">
                          Result will be shown here
                        </p>
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
