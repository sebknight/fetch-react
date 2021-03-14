import React from "react";
import { useSelector } from "react-redux";
import {
  selectSnippet,
  selectTitle,
  selectIsWikiLoading,
  selectPageId,
  selectIsWikiError
} from "../../redux/slices/wikiSlice";
import { selectDogUrl, selectIsDogLoading, selectIsDogError } from "../../redux/slices/dogSlice";
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
  const isDogError = useSelector(selectIsDogError);
  const isWikiError = useSelector(selectIsWikiError);
  
  return (
    <section className="mt-12 flex justify-center items-center">
      {renderIf(isDogLoading || isWikiLoading)(() => (
        <LoadingIndicator />
      ))}
      {renderIf(!isDogLoading && !isWikiLoading && snippet !== "")(() => (
        <div
          data-testid="Content-card"
          className="max-w-full md:max-w-5xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg"
        >
          <div 
          className="xs:flex-col md:flex max-h-full">
            {renderIf(!isDogError && !isWikiError || imgUrl !== "/")(() => (
              <>
                <Img
                  data-testid="Content-image"
                  className="max-w-full max-h-80 md:max-w-4xl rounded-md self-center"
                  style={{ backgroundColor: "lightgrey", width: 400 }}
                  src={imgUrl}
                  title={title}
                  alt={title}
                  debounce={0}
                />
              </>
            ))}

            <div className="flex flex-col mt-5 md:mt-0 md:ml-5">
              {renderIf(imgUrl !== "/")(() => (
                <h2
                  data-testid="Content-title"
                  className="text-xl font-bold text-green-600"
                >
                  {title}
                </h2>
              ))}

              {renderIf(isDogError)(() => (
                <p>No dogs found. Try again!</p>
              ))}

              {renderIf(imgUrl !== "/")(() => (
                <p data-testid="Content-snippet">{snippet}</p>
              ))}

              {renderIf(
                snippet !== "No facts found, but that's a great dog!" &&
                  pageId !== 0
              )(() => (
                <div className="flex h-full items-end">
                  <p>
                    Find out more on{" "}
                    <a
                      data-testid="Content-link"
                      className="text-pink-600 underline"
                      href={`https://en.wikipedia.org?curid=${pageId}`}
                    >
                      Wikipedia
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Content;
