







document.addEventListener("readystatechange", (event) => {

    console.log(`readystate: ${document.readyState}\n`);

    if (document.readyState == "complete") {
        runStartupMethods();
    }
});



const runStartupMethods = () => {
    mainHeaderAnimation();
}