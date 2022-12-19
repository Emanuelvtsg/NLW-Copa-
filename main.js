function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function createGame(player1, player2, hour){
    return `
        <li>
            <img src="./assets/icons/ico-${player1}.svg" alt="Bandeira do ${capitalize(player1)}"/>
            <strong>${hour}</strong>
            <img src="./assets/icons/ico-${player2}.svg" alt="Bandeira da ${capitalize(player2)}"/>
        </li>
    `
}
let delay = -0.2;
function createCard(date, day, games){
    delay = delay + 0.2    
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2> ${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

const body = document.getElementById("body");
function blueTheme(){
    body.className = "blue";
}
function greenTheme(){
    body.className = "green";
}
function yellowTheme(){
    body.className = "yellow";
}


document.querySelector("#cards").innerHTML = 
createCard("20/11", "domingo", createGame("qatar", "ecuador", "13:00")) +
createCard("21/11", "segunda", createGame("england", "iran", "10:00") + createGame("senegal", "netherlands", "13:00") + createGame("usa", "wales", "16:00")) +
createCard("22/11", "terça", createGame("argentina", "arabia", "07:00") + createGame("denmark", "tunisia", "10:00") + createGame("mexico", "poland", "13:00") + createGame("france", "australia", "16:00")) +
createCard("23/11", "quarta", createGame("morocco", "croatia", "07:00") + createGame("germany", "japan", "10:00") + createGame("spain", "costa", "13:00") + createGame("belgium", "canada", "16:00")) +
createCard("24/11", "quinta", createGame("switzerland", "cameroon", "07:00") + createGame("uruguay", "korea", "10:00") + createGame("portugal", "ghana", "13:00") + createGame("brazil", "serbia", "16:00")) +
createCard("25/11", "sexta", createGame("wales", "iran", "07:00") + createGame("qatar", "senegal", "10:00") + createGame("netherlands", "ecuador", "13:00") + createGame("england", "usa", "16:00")) +
createCard("26/11", "sábado", createGame("tunisia", "australia", "07:00") + createGame("poland", "arabia", "10:00") + createGame("france", "denmark", "13:00") + createGame("argentina", "mexico", "16:00")) +
createCard("27/11", "domingo", createGame("japan", "costa", "07:00") + createGame("belgium", "morocco", "10:00") + createGame("croatia", "canada", "13:00") + createGame("spain", "germany", "16:00")) +
createCard("28/11", "segunda", createGame("cameroon", "serbia", "07:00") + createGame("korea", "ghana", "10:00") + createGame("brazil", "switzerland", "13:00") + createGame("portugal", "uruguay", "16:00")) +
createCard("29/11", "terça", createGame("ecuador", "senegal", "07:00") + createGame("netherlands", "qatar", "10:00") + createGame("iran", "usa", "13:00") + createGame("wales", "england", "16:00")) +
createCard("30/11", "quarta", createGame("tunisia", "france", "07:00") + createGame("australia", "denmark", "10:00") + createGame("poland", "argentina", "13:00") + createGame("arabia", "mexico", "16:00")) +
createCard("01/12", "quinta", createGame("croatia", "belgium", "07:00") + createGame("canada", "morocco", "10:00") + createGame("japan", "spain", "13:00") + createGame("costa", "germany", "16:00")) +
createCard("02/12", "sexta", createGame("korea", "portugal", "07:00") + createGame("ghana", "uruguay", "10:00") + createGame("serbia", "switzerland", "13:00") + createGame("cameroon", "brazil", "16:00")) +
createCard("03/12", "sábado", createGame("netherlands", "usa", "12:00") + createGame("argentina", "australia", "16:00")) +
createCard("04/12", "domingo", createGame("france", "poland", "12:00") + createGame("england", "senegal", "16:00")) +
createCard("05/12", "segunda", createGame("japan", "croatia", "12:00") + createGame("brazil", "korea", "16:00")) +
createCard("06/12", "terça", createGame("morocco", "spain", "12:00") + createGame("portugal", "switzerland", "16:00")) +
createCard("09/12", "sexta", createGame("croatia", "brazil", "12:00") + createGame("netherlands", "argentina", "16:00")) +
createCard("10/12", "sábado", createGame("morocco", "portugal", "12:00") + createGame("england", "france", "16:00")) +
createCard("13/12", "terça", createGame("argentina", "croatia", "16:00")) +
createCard("14/12", "quarta", createGame("france", "morocco", "16:00")) +
createCard("17/12", "sábado", createGame("croatia", "morocco", "12:00")) +
createCard("18/12", "terça", createGame("argentina", "france", "12:00"))




// PARTE DA MUDANÇA DE TEMA
function showThemes(){
    document.getElementById("divThemeButtons").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches(".showThemes")) {
        var dropdowns = document.getElementsByClassName("divThemeButtons");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var actualDropdown = dropdowns[i];
            if(actualDropdown.classList.contains("show")){
                actualDropdown.classList.remove("show");
            } 
        }
    }
}