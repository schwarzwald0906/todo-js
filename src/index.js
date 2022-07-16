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
    //未完了のTODOから削除
    deleteIncompleteFrom(completeButton.parentNode);

    //完了したTODOに追加
    const addTarget = completeButton.parentNode;

    const text = addTarget.firstChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ作成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すbuttonタグ追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を指定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    backButton.addEventListener("click", () => alert("戻す"));

    //画面表示
    div.appendChild(li);
    div.appendChild(backButton);
    document.getElementById("complete-list").appendChild(div);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteIncompleteFrom(deleteButton.parentNode);
  });

  //完了ボタン押下時に未完了のTODOから削除するメソッド
  const deleteIncompleteFrom = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  //画面表示
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
