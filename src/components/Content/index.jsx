import React from 'react';
import { useSelector } from 'react-redux';
import { selectSnippet } from '../../redux/slices/wikiSlice';

const Content = () => 
    <div>
        {useSelector(selectSnippet)}
    </div>

export default Content;