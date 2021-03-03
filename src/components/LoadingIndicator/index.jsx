import React from "react";
import { useSelector } from "react-redux";
import { selectIsDogLoading } from "../../redux/slices/dogSlice";
import { selectIsWikiLoading } from "../../redux/slices/wikiSlice";
import renderIf from "render-if";

const LoadingIndicator = () => {
  const isDogLoading = useSelector(selectIsDogLoading);
  const isWikiLoading = useSelector(selectIsWikiLoading);

  return (
    <>
      {renderIf(isDogLoading || isWikiLoading)(() => (
        <div className="lds-heart">
          <div></div>
        </div>
      ))}
    </>
  );
};

export default LoadingIndicator;
