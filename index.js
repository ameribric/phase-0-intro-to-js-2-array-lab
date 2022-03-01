const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat (name) {
    return cats.unshift(name) 
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats] 
}


function removeLastCat(name) {
    return cats.slice(0, -1)
}

function removeFirstCat(name) {
    return cats.slice(1)
}


// cats.unshift()

// cats.pop()

// cats.unshift()



// const copyOfCats = cats.slice()

// const copyOfCats = cats.slice(-1)

// const copyOfCats = cats.slice(1,2)

// const copyOfCats = cats.slice (0)

// const copyOfCatsTwo = [...cats];

// const firstCats = [...cats, "Milo"]

// const lastCats = ("Garfield", ...cats)