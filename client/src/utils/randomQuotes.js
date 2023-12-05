export default async function fetchRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/quotes/random?minLength=200");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.length > 0) {
            const quote = data[0].content;
            return quote;
        } else {
            console.log("Invalid data");
            return data;
        }
    } catch (error) {
        console.log("Error fetching quote");
        return error;
    };
};
