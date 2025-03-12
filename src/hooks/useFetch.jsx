import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                if (isMounted) {
                    setData(res.data);
                    setError(null);
                }
            } catch (e) {
                if (isMounted) setError(e);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
            setError(null);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, reFetch };
};

export default useFetch;
