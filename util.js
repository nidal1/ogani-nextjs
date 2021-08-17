export const capitalizeAndRemoveUnderscores = (word) => {
    // Capitalize
    word = word.toString().charAt(0).toUpperCase() + word.slice(1);
    //Sreach if it have an -
    if (word.search('-') !== -1) {
        // Replace - with ' ' 
        return word.replace(/-/g, ' ');
    }
    // Return the value
}

export const capitalizeAndRemoveForwardslash = (word) => {
    word = word.slice(1);
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
}