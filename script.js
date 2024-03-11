const URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

const UpdateElements = (content) => {
    let chartName = document.getElementById("chartName");
    let updated = document.getElementById("updated");
    let code = document.getElementById("code");
    let rate = document.getElementById("rate");
    let disclaimer = document.getElementById("disclaimer");

    chartName.textContent = content.chartName;
    updated.textContent = content.time.updated;
    rate.textContent = content.bpi.USD.rate;
    code.textContent = content.bpi.USD.code;
    disclaimer.textContent = content.disclaimer;
}

async function getBIP() {
    let response = await fetch(URL);
    response = await response.json();
    UpdateElements(response);
}

const reloadBtn = document.getElementById("reload");

reloadBtn.addEventListener('click', getBIP);

getBIP();

setInterval(() => {
    getBIP();
}, 3600000);