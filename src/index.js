import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、値を初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //未完了のTODOの追加

  //divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  //buttonタグ作成
  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了したTODOに追加
    //divタグ作成
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグ作成
    const li = document.createElement("li");
    li.innerText = inputText;

    //戻すbuttonタグ追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => alert("戻す"));

    //画面表示
    div.appendChild(li);
    div.appendChild(backButton);
    document.getElementById("complete-list").appendChild(div);

    //未完了のTODOから削除
    // const completeTarget = completeButton.parentNode;
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //画面表示
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
