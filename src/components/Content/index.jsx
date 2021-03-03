import React from "react";
import { useSelector } from "react-redux";
import {
  selectSnippet,
  selectTitle,
  selectIsWikiLoading,
  selectPageId,
} from "../../redux/slices/wikiSlice";
import { selectDogUrl, selectIsDogLoading } from "../../redux/slices/dogSlice";
import renderIf from "render-if";
import Img from "react-cool-img";
import LoadingIndicator from "../LoadingIndicator";

const Content = () => {
  const title = useSelector(selectTitle);
  const imgUrl = useSelector(selectDogUrl);
  const snippet = useSelector(selectSnippet);
  const pageId = useSelector(selectPageId);
  const isDogLoading = useSelector(selectIsDogLoading);
  const isWikiLoading = useSelector(selectIsWikiLoading);

  return (
    <section className="mt-12 flex justify-center items-center">
      <LoadingIndicator />
      {renderIf(!isDogLoading && !isWikiLoading && snippet !== "")(() => (
        <div className="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
        <div className="flex">
          {renderIf(imgUrl !== "/" && imgUrl !== "no dogs found")(() => (
            <Img
              className="w-60 rounded-md border-2 border-gray-300"
              src={imgUrl}
              title={title}
              alt={title}
            />
          ))}

          <div className="flex flex-col ml-5">
            {renderIf(imgUrl !== "no dog found")(() => (
              <h2 className="text-xl font-bold text-green-600">{title}</h2>
            ))}

            {renderIf(imgUrl === "no dog found")(() => (
              <p>No dogs found. Try again!</p>
            ))}

            {renderIf(imgUrl !== "no dog found")(() => (
              <p>{snippet}</p>
            ))}

            {renderIf(pageId !== 0)(() => (
              <p>
                Find out more on{" "}
                <a
                  className="text-pink-600 underline"
                  href={`https://en.wikipedia.org?curid=${pageId}`}
                >
                  Wikipedia
                </a>
              </p>
            ))}
          </div>
        </div>
    </div>
      ))}
    </section>
  );
};
export default Content;
