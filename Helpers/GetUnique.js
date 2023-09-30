function GetUnique(array) {
    const uniqueTitles = new Set();
    array.forEach(current => {
        uniqueTitles.add(current.title);
    });
    return uniqueTitles;
}

module.exports.GetUnique = GetUnique;