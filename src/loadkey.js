
const KEY_LOC = "https://zthart.me/static/DE6CE085CF29A5926F2DB1EFD1A7348B79D7CB4E.asc"

const loadKeyFromFile = async () => {
    const res = await fetch(KEY_LOC, {method: 'GET'});
    return res.text()
}

const copyKeyToClipboard = async () => {
    const keycontent = document.getElementById('keycontent')
    await navigator.clipboard.writeText(keycontent.innerText)
}

loadKeyFromFile().then(keyContent => {
    document.getElementById('keycontent').innerText = keyContent
})

document.getElementById('keycontent-copy').addEventListener('click', copyKeyToClipboard)