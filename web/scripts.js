window.onload = function () {
    console.log('loaded');
}

async function fetchWorld() {
    let data = await getData('/api/hello');
    if (data) {
        document.getElementById('output').innerHTML = data;
    }
}


async function getData(path) {
    const response = await fetch(path, {
        method: 'GET'
    });

    if (response.status == 200) {
        const body = await response.text();
        return body;
    } else {
        return undefined;
    }
}