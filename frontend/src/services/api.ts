import axios from "axios";
import type { Branch } from "../types/branch";

export async function fetchBranches(): Promise<Branch[]> {
    const response = await axios.get<Branch[]>('http://localhost:3001/api/branches')
    return response.data
}

export function isOpenNow(branch: Branch): boolean {
    const now = new Date();
    const day = now.getDay();

    let dayConfig;
    if (day === 0) {
        dayConfig = branch.operating_hours.sunday;
    } else if (day === 6) {
        dayConfig = branch.operating_hours.saturday;
    } else {
        dayConfig = branch.operating_hours.weekday;
    }

    if (!dayConfig) {
        return false;
    }

    const timeToMins = (timeStr: string): number => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const openMinutes = timeToMins(dayConfig.open);
    const closeMinutes = timeToMins(dayConfig.close);

    return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}