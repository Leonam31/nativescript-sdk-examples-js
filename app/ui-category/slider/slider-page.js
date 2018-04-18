const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ui-category/slider/basics/basics-page"),
    new link("Code Behind", "ui-category/slider/code-behind/code-behind-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
