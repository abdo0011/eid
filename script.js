(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "🙃 بجد محدش قالك ؟",
    "😉ازايي يجدعانن؟",
    "الحلاوه دي كلهااا ميتقالهاش😍",
    "اومالل يتقال لمين بقا؟😌",
    "اقسم محد يعرف ان القمر ده لازم يتاكل🤩",
    "مش عارف لما الجمال ده ميتقالوش؟؟🙂",
    "طب اقولك انا واديك العيديه 😗",
    "هقولك عافيه اصل القمر ده لازم يتقاله",
    "واديكيي العيديه عافيه كمان🤗",
    "حتي لو مش عاجبكك وريني هتعملي اي🤭 ❤️"
];

let messageIndex = 0;

window.handleNoClick = function () {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    if (currentSize < 40) {
        yesButton.style.fontSize = `${currentSize * 1.2}px`;
    }
};

window.handleYesClick = function () {
    window.location.href = "yes_page.html";
};
  
