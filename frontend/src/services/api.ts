import axios from "axios";
import type { Branch } from "../types/branch";

export async function fetchBranches(): Promise<Branch[]> {
    const response = await axios.get<Branch[]>('http://localhost:3001/api/branches')
    return response.data
}