export const capitalize = (word) => {
    return word.toString().toLowerCase().charAt(0).toUpperCase() + word.slice(1);
}

export const capitalizeAndRemoveUnderscores = (word) => {
    // Capitalize
    word = capitalize(word);
    //Sreach if it have an -
    if (word.search('-') !== -1) {
        // Replace - with ' ' 
        return word.replace(/-/g, ' ');
    }
    // Return the value
}

export const capitalizeAndRemoveForwardslash = (word) => {
    word = word.slice(1);
    word = capitalize(word);
    return word;
}