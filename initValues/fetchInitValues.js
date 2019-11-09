import fetch from "isomorphic-unfetch";

import { apiPath } from 'public/config'

const get = async (items, params) => {
    console.log('runFetch')
    try {
        const res = await fetch(apiPath + items + (params ? '?' + params : ''));
        const data = await res.json();
        return data;
    } catch (ex) {
        return { title: 'helloWorld', text: 'howCollToBERUSSIANPROGRAMER' };
    }
};


export default get;
