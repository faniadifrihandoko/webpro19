function change_kurs(){
    // mengambil value dari Element id "input_nilai"
    let inputNilai = document.getElementById("input_nilai").value;
    // mengambil value dari Element id "valas"
    let valas = document.getElementById("valas").value;
    // mendeklarasikan variable hasilNilai
    let hasilNilai;
    if (valas == "US"){
        document.getElementById("hasil_nilai").value = "Rp. " + parseFloat(inputNilai) * 9915;
        // membuat variabel baru dengan hasil value baru
        hasilNilai = document.getElementById("hasil_nilai").value;
        // menampilkan value baru dari nilai rupiah
        console.log(hasilNilai);
    }else if (valas == "SGD"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 13472;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }else if (valas == "RINGGIT"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 874;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }else if (valas == "YENJPG"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 120;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }else if (valas == "EURO"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 15888;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }else if (valas == "RIYAL"){
        document.getElementById("hasil_nilai").value  = "Rp. " + parseFloat(inputNilai) * 3592;
        hasilNilai = document.getElementById("hasil_nilai").value;
        console.log(hasilNilai);
    }
}