export async function fetchLeetCodeStats(username) {
  const url = `https://leetcode.com/${username}/`;

  const res = await fetch(url);
  const html = await res.text();

  const easy = (html.match(/Easy<\/span>\s*<span>(\d+)/) || [0, 0])[1];
  const medium = (html.match(/Medium<\/span>\s*<span>(\d+)/) || [0, 0])[1];
  const hard = (html.match(/Hard<\/span>\s*<span>(\d+)/) || [0, 0])[1];

  return {
    easy: Number(easy),
    medium: Number(medium),
    hard: Number(hard)
  };
}
