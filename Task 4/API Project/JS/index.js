document.getElementById('searchButton').addEventListener('click', makeSearch);

async function makeSearch() {
    const input = document.getElementById('searchInput').value;
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`);
        const data = await response.json();

        if (response.ok && data.length > 0) {
            const country = data[0];
            const currency = Object.values(country.currencies)[0].name;
            const languages = Object.values(country.languages).join(', ');

            document.getElementById('country').innerHTML = `
                <img src="${country.flags.svg}" alt="${country.name.common} flag" width="250">
                <p class="name"> ${country.name.common}</p>
                <strong>Capital:</strong><p>${country.capital[0]}</p>
                <strong>Continent:</strong><p>${country.region}</p>
                <strong>Population:</strong><p>${country.population.toLocaleString()}</p>
                <strong>Currency:</strong><p>${currency}</p>
                <strong>Common Languages:</strong><p>${languages}</p>
            `;
        } else {
            document.getElementById('country').innerHTML = `<p class = 'glitch'>No country found with that name.</p>`;
        }
    } catch (error) {
        console.error('Error fetching country data:', error);
        document.getElementById('country').innerHTML = `<p>Error retrieving data. Please try again later.</p>`;
    }
}
