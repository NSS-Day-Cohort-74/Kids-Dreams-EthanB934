import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const starClicked = clickEvent.target

        if(starClicked.dataset.type === "celebrity") {
            for (const celebrity of celebrities) {
                if(celebrity.id === parseInt(starClicked.dataset.id)) {
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star.`)
                }
            }
        }
    }
)