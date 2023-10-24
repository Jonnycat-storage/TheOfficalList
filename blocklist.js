//removes ads
function removeElementsWithClasses() {
    const classesToRemove = [
        //soundcloud ads (for now)
        "soundcloud.com/audio-ads?",
    ];

    classesToRemove.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => element.remove());
    });
}

// Call the function to remove elements with specified classes when the page loads
window.addEventListener("load", removeElementsWithClasses);