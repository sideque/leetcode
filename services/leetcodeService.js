export async function fetchLeetCodeStats(username) {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({
        query: `
          query userProblemsSolved($username: String!) {
            allQuestionsCount {
              difficulty
              count
            }
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
            }
          }
        `,
        variables: { username },
      }),
    });

    const data = await response.json();
    // console.log("LeetCode API Response:", JSON.stringify(data, null, 2));

    if (data.errors) {
        console.error("LeetCode GraphQL Error:", data.errors);
        return { easy: 0, medium: 0, hard: 0 };
    }

    const stats = data.data?.matchedUser?.submitStats?.acSubmissionNum || [];

    const easy = stats.find(s => s.difficulty === "Easy")?.count || 0;
    const medium = stats.find(s => s.difficulty === "Medium")?.count || 0;
    const hard = stats.find(s => s.difficulty === "Hard")?.count || 0;

    return { easy, medium, hard };
  } catch (error) {
    console.error("Failed to fetch LeetCode stats:", error);
    return { easy: 0, medium: 0, hard: 0 };
  }
}
