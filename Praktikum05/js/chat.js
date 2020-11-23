function kirim(){
    var para = document.createElement("P");
    var newChat = document.getElementById("input-masukan-chat").value;
    console.log(newChat);
    para.append(newChat);
    document.getElementById("container-chat").append(para);
}