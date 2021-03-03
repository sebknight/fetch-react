import React from 'react';
import { useSelector } from 'react-redux';
import { selectSnippet, selectTitle } from '../../redux/slices/wikiSlice';
import { selectUrl } from '../../redux/slices/dogSlice';
// import renderIf from 'render-if';

const Content = () => {
    const title = useSelector(selectTitle);
    // const isWikiLoading = useStore(state.dog.loading);
    // const isDogLoading = useSelector(state.);
    return (
        <>
            {/* {renderIf(!isWikiLoading && !isDogLoading)(() => ( */}
                <div className="content">
                    <h2>{title}</h2>
                    <img src={useSelector(selectUrl)} alt={title}></img>
                     <p>
                        {useSelector(selectSnippet)}
                    </p>
                </div>
            {/* ))} */}
        </>
    )
}
export default Content;