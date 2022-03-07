import { useEffect, useState } from "react";

const useQuery = (promise, dependencyList = []) => {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            setIsFetching(false);
            let dataFromApi = await promise();
            setData(dataFromApi.data);
            setIsFetching(true);
        })();
    }, dependencyList);
    return {
        data,
        isFetching
    };
};

export default useQuery;