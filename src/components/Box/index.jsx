import React from 'react';
import { useFetch } from '../../hooks/useFetch';

const Box = () => {
    const dog = useFetch("https://dog.ceo/api/breeds/image/random");

    return (
        <section className="content">
        </section>
    )
}

export default Box;