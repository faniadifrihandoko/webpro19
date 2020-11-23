function change_image() {
    let images = document.getElementById("changeImage").value;
    let gambar = document.getElementById("gambar");
    if (images == "kucing"){
        gambar.src="./gambar/kucing.jpg";
        alert(`Ini adalah foto kucing.jpg ${images}`);
    }else if (images == "kelinci"){
        gambar.src="./gambar/kelinci.jpg";
        alert(`Ini adalah foto kelinci ${images}`);
    }else if (images == "Tikus"){
        gambar.src="./gambar/tikus.jpg";
        alert(`Ini adalah foto Tikus ${images}`);
    }else if (images == "anjing"){
        gambar.src="./gambar/anjing.jpg";
        alert(`Ini adalah foto anjing ${images}`);
    }else if (images == "koala"){
        gambar.src="./gambar/koala.jpg";
        alert(`Ini adalah foto Koala ${images}`);
    }else if (images == "singa"){
        gambar.src="./gambar/singa.jpg";
        alert(`Ini adalah foto singa ${images}`);
     }else if (images == "Jerapah"){
        gambar.src="./gambar/jerapah.jpg";
        alert(`Ini adalah foto Jerapah ${images}`);
    }
}