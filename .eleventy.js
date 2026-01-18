import rss from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/avater-ogp.jpg");
  eleventyConfig.addPassthroughCopy("src/posts/**/img");
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
  
    const text = content
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  
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
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
}