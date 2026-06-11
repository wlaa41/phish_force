function showWinScreen(){

    document.getElementById("winScreen").style.display = "flex";

}

function showLoseScreen(){

    document.getElementById("loseScreen").style.display = "flex";

}

function restartGame(){

    location.reload();

}

function goHome(){

    location.reload();

}
dailyRewards
let coins = Number(localStorage.getItem("coins")) || 0;

function checkDailyReward(){

    const today = new Date().toDateString();

    const lastClaim =
        localStorage.getItem("lastReward");

    const status =
        document.getElementById("rewardStatus");

    const button =
        document.getElementById("claimBtn");

    if(lastClaim === today){

        status.innerText =
            "✅ Reward already claimed today";

        button.disabled = true;

    }else{

        status.innerText =
            "🎁 Daily reward available!";

        button.disabled = false;
    }
}

function claimReward(){

    const reward = 100;

    coins += reward;

    localStorage.setItem("coins", coins);

    localStorage.setItem(
        "lastReward",
        new Date().toDateString()
    );

    document.getElementById("rewardStatus")
        .innerText =
        `🎉 You received ${reward} coins!`;

    document.getElementById("claimBtn")
        .disabled = true;
}

window.onload = function(){

    checkDailyReward();

};
// Coins saved permanently
let coins = Number(localStorage.getItem("coins")) || 0;

// Day rewards
const dailyRewards = [2, 4, 6, 8, 10, 12, 14];

document.getElementById("coinDisplay").textContent = coins;

function checkDailyReward(){

    const today = new Date().toDateString();

    const lastClaim =
        localStorage.getItem("lastReward");

    const rewardDay =
        Number(localStorage.getItem("rewardDay")) || 0;

    const status =
        document.getElementById("rewardStatus");

    const button =
        document.getElementById("claimBtn");

    if(lastClaim === today){

        status.textContent =
            `✅ Day ${rewardDay === 0 ? 7 : rewardDay} already claimed`;

        button.disabled = true;

    }else{

        status.textContent =
            `🎁 Day ${rewardDay + 1} reward available: ${dailyRewards[rewardDay]} coins`;

        button.disabled = false;
    }
}

function claimReward(){

    let rewardDay =
        Number(localStorage.getItem("rewardDay")) || 0;

    const reward =
        dailyRewards[rewardDay];

    coins += reward;

    localStorage.setItem("coins", coins);

    document.getElementById("coinDisplay")
        .textContent = coins;

    localStorage.setItem(
        "lastReward",
        new Date().toDateString()
    );

    rewardDay++;

    if(rewardDay >= 7){

        alert("🏆 Weekly Login Streak Complete!");

        rewardDay = 0;
    }

    localStorage.setItem(
        "rewardDay",
        rewardDay
    );

    document.getElementById("rewardStatus")
        .textContent =
        `🎉 You received ${reward} coins!`;

    document.getElementById("claimBtn")
        .disabled = true;
}

window.onload = function(){

    checkDailyReward();

};
