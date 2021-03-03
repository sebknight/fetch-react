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
    <div className="container mx-auto">
      <LoadingIndicator />
      {renderIf(!isDogLoading && !isWikiLoading && snippet !== "")(() => (
        <div className="content mx-auto">
          <h2>{title}</h2>
          <div className="content__img-container">
            <Img
              className="content__img"
              src={imgUrl}
              title={title}
              alt={title}
            />
          </div>
          {renderIf(imgUrl === "no dog found")(() => (
            <p>No dogs found. Try again!</p>
          ))}
          {renderIf(imgUrl !== "no dog found")(() => (
            <p>{snippet}</p>
          ))}
          {renderIf(pageId !== 0)(() => (
            <p>
              Find out more on{" "}
              <a href={`https://en.wikipedia.org?curid=${pageId}`}>Wikipedia</a>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Content;
