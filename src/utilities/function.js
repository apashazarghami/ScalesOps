const abbreviationWords = word => {
    const splittedWord = word.split(' ')
    return splittedWord.splice(0, 3).join(" ")
}

export { abbreviationWords }