let agreed = false;

document.getElementById('btn').addEventListener('click', () => {
  const answer = confirm("你愿意接受我的表白吗？🥺");

  if (answer) {
    agreed = true;
    const confession = document.getElementById('confession');
    confession.classList.remove('hidden');
  } else {
    alert("不可以逃跑噢～🥺");
  }
});

window.addEventListener("beforeunload", function (e) {
  if (!agreed) {
    e.preventDefault();
    e.returnValue = "你还没答应我呢... 💔";
    return "你还没答应我呢... 💔";
  }
});
