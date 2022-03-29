document.getElementById("submit").onclick = (e) => {
  let target = document.getElementById("dateTime").value;
  console.log(target);
  console.log(new Date(target));
  let interval = setInterval(() => {
    let current = new Date();
    let diff = new Date(target).getTime() - current.getTime();
    //console.log(diff);
    document.getElementById("days").innerText = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );
    document.getElementById("hours").innerText = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    document.getElementById("minutes").innerText = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );
    document.getElementById("seconds").innerText = Math.floor(
      (diff % (1000 * 60)) / 1000
    );
    if (diff < 0) {
      clearInterval(interval);
      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;
    }
    document.getElementById("reset").onclick = (e) => {
      clearInterval(interval);
      document.getElementById("days").innerText = "";
      document.getElementById("hours").innerText = "";
      document.getElementById("minutes").innerText = "";
      document.getElementById("seconds").innerText = "";
    };
  }, 1000);
};
