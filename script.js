function copyIP() {
    const ip = "anivismp.aternos.me";

    navigator.clipboard.writeText(ip)
        .then(() => {
            alert("✅ Server IP copied!");
        })
        .catch(() => {
            alert("Server IP: " + ip);
        });
}

function showComingSoon(event) {
    event.preventDefault();

    alert("📱 ANIVI SMP App download will be available soon!");
}
