function LongestWord(BlogArray) {
    if (BlogArray.length === 0) {
        return null;
    }

    const longest = BlogArray.reduce((currentLongest, current) => {
        return current.title.length > currentLongest.title.length ? current : currentLongest;
    }, BlogArray[0]); 

    return longest.title;
}

module.exports.LongestWord = LongestWord;