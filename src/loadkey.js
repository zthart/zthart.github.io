
const KEY_LOC = "https://zthart.me/static/C2543588BB77A466.asc"

const loadKeyFromFile = async () => {
    const res = await fetch(KEY_LOC, {method: 'GET'});
    return res.text()
}

const copyKeyToClipboard = async e => {
    const keycontent = document.getElementById('keycontent')
    await navigator.clipboard.writeText(keycontent.innerText)
    e.target.innerText = 'copied!'
    setTimeout(() => e.target.innerText = 'copy', 1000)
}

loadKeyFromFile().then(keyContent => {
    document.getElementById('keycontent').innerText = keyContent
})

document.getElementById('keycontent-copy').addEventListener('click', copyKeyToClipboard)