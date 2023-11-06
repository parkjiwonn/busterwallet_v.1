console.log("===========================CONTENT.jS ===========================");

// 웹페이지에서 크롬 확장 프로그램으로 요청을 보냄
chrome.runtime.sendMessage({ greeting: "IsConnected" }, function (response) {
    console.log('확장 프로그램으로부터의 응답:', response.farewell);

    if (response.farewell === "true") {
        alert('@@@')
        //localStorage.setItem('IsConnected','true');
    } else {
        alert('!!!')

        //localStorage.setItem('IsConnected','false');

    }



});