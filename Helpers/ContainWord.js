function ContainWord(array, word) {
    return array.reduce((count, current) => {
        if (current.title.toLowerCase().includes(word.toLowerCase())) { // case don't matter
            return count + 1;
        }
        return count;
    }, 0);
}

module.exports.ContainWord = ContainWord;
