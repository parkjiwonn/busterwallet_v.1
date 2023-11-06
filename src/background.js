import nearAPI from 'near-api-js'

console.log('!!!!!nearAPI!!!!!:', nearAPI)

// 웹페이지로부터의 요청을 받았을 때 처리하는 함수
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    // sender.tab = 메시지를 전송한 탭에 대한 정보를 포함하고 있다.
    // 객체가 존재하면 메시지는 content에서 전송한 것 그렇지 않다면 확장 프로그램에서 전송된 것.
    // 요청 보낸 tab에 따라서 행동을 다르게 해주면 될 것 같다.
    console.log('sender.tab : ', sender.tab.url);

    if (request.greeting === "IsConnected") {
        console.log('1');
        chrome.storage.local.get(['Connected'], function (result) {

            if (result && result.Connected !== undefined) {
                console.log('Value currently is ' + result.Connected);
                sendResponse({ farewell: "true" });
            } else {
                console.log('Connected value is not set.');
                sendResponse({ farewell: "false" });
            }

        });
        return true;
    }

    // 신호가 오면 여기 지갑에서 서비스와 지갑을 연결해줘야한다. 
    // 알림 생성 

});

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    console.log('chrome.runtime.onMessageExternal.addListener')
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    switch (request.openUrlInEditor) {
        case "connectWallet":
            console.log('connectWallet!!!!!')
            break;

    }
});