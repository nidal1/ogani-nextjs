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
    return word;
}

export const capitalizeAndRemoveForwardslash = (word) => {
    word = word.slice(1);
    word = capitalize(word);
    return word;
}

export const fetchData = async (url) => {
    let res = await fetch(url,
        {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.,
            mode: 'no-cors', // no-cors, *cors, same-origin,
            headers: {
                'Content-Type': 'application/json',
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
    return await res.json();
    

}