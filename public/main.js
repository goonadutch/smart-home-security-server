let entries = document.querySelector(".entries")

setInterval(async () => {
    let request = await fetch("./data")
    request = await request.json()
    let list = addListItem(request.distance)
    entries.prepend(list)

}, 1000)

function addListItem(distance) {

    let list = document.createElement("li")
    let classList = ["listItem"]

    distance = parseFloat(distance)

    if(distance < 22) classList.push("warning")
    if(distance < 12) classList.push("danger")

    list.className = classList.join(" ")
    list.innerText = distance

    return list

}