module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("assets/images");
};

module.exports = function(eleventyConfig) {
    // Custom Eleventy filter to format date
    eleventyConfig.addFilter('formatDate', function(date) {
        // Ensure date is in a valid format
        if (!date) return '';

        // Parse the date string
        const parsedDate = new Date(date);

        // Format the date (e.g., January 1, 2023)
        const formattedDate = parsedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        return formattedDate;
    });
};

