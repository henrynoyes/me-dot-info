import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({"./public/": "/"});
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");
	eleventyConfig.addWatchTarget("css/**/*.css");

	eleventyConfig.addFilter("boldName", function(authors) {
		return authors.replace(/Henry Noyes/g, "<strong>Henry Noyes</strong>");
	});
	
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "auto"],
		failOnError: false,
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			}
		},
	});
};

export const config = {
	templateFormats: ["md", "njk", "html"],
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	}
};