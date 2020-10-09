function SWCharacterSearch(name) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://swapi-thinkful.herokuapp.com/api/people/?search=";
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong');
    }

    return fetch(`${proxyurl}${url}${name}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(data => data.results.map(character => character.name));
}

export function search(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(SWCharacterSearch(name)), 500);
    });
}
