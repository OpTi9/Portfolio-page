import {PageInfo} from '../typings';

export const fetchPageInfo = async () => {
    // make a call to the backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    // get the data from the response
    const data = await res.json();
    const pageInfo: PageInfo[] = data.pageInfo;
    return pageInfo;
}