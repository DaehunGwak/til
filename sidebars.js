module.exports = {
  docs: [
    "main",
    {
      type: "category",
      label: "Docusaurus",
      items: ["docusaurus/til"],
    },
    {
      type: "category",
      label: "Web",
      items: [
        {
          html: [
            "web/html/intro",
            "web/html/elements",
            "web/html/document-metadata",
            "web/html/sections",
            "web/html/grouping",
          ],
          javascript: [
            'web/javascript/events',
          ]
        },
      ],
    },
  ],
};
