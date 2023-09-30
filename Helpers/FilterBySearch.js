function FilterBySearch(BlogArray, word) {

    if (BlogArray.length < 1) {
        return null;
    }
    const filteredArray = BlogArray.filter((element) => {
        if (element.title.toLowerCase().includes(word.toLowerCase())) {
            return element;
        }
    });
    return filteredArray.length > 0 ? filteredArray : null;
}

module.exports.FilterBySearch = FilterBySearch;