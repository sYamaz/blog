export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("posts/**/img");
  eleventyConfig.addGlobalData("year", () => {
    return new Date().getFullYear();
  });
  // Get only content that matches a tag
  eleventyConfig.addCollection("sortedpost", function (collectionsApi) {
  	return collectionsApi.getFilteredByTag("post").sort((a, b) => {
        return b.date - a.date;
    });
  });
  // descriptionの作成
  eleventyConfig.addFilter("excerpt", (content, length = 140) => {
    if (!content) return "";

    // HTMLタグを除去
    const text = content.replace(/<[^>]*>/g, "");

    // 先頭N文字
    return text.length > length
      ? text.slice(0, length) + "…"
      : text;
  });
  /** 日付フォーマット変換 */
  eleventyConfig.addFilter("date", (dateObj) => {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    const d = String(dateObj.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  });
  
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}