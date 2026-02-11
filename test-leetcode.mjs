import { fetchLeetCodeStats } from './services/leetcodeService.js';

const test = async () => {
    // Testing with a known active user
    const username = 'neal_wu'; 
    console.log(`Fetching stats for ${username}...`);
    const stats = await fetchLeetCodeStats(username);
    console.log("Stats:", stats);
};

test();
