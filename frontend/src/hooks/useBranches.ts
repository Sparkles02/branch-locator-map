import { useState, useEffect } from "react";
import { fetchBranches } from "../services/api";
import type { Branch } from "../types/branch";

export const useBranches =() => {
    const [branches, setBranches] = useState<Branch[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchBranches()
            .then((branches) => {
                setBranches(branches)
                setLoading(false)
            })
            .catch((err) => {
            setError(err)
            setLoading(false)
            });
    }, []);

    return { branches, loading, error };
};

export default useBranches;