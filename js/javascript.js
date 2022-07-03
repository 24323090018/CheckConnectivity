var s = document.querySelector(".connectivity");
        var i = document.querySelector(".material-icons");
        function onlineStatus() {
            s.innerHTML = "Online.";
            i.innerHTML = "wifi";
            i.style.color = "green";
            console.log("Online");
        }
        function offlineStatus() {
            s.innerHTML = "Offline.";
            i.innerHTML = "wifi-off";
            i.style.color = "red";
            console.log("offline");
        }
        window.onload = function () {
            if(navigator.onLine) {
                // document.location.reload();
                onlineStatus();
            } else {
                document.location.reload();
                // offlineStatus();
            }
        };
        // navigator is a tool which check the network status
        // window.addEventListener("online" , onlineStatus);
        // window.addEventListener("offline" , offlineStatus);