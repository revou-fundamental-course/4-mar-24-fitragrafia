window.onload = () => {
  let button = document.querySelector("#btn");

  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

  let male = document.getElementById("sex-man");

  let female = document.getElementById("sex-woman");

  let weight = parseInt(document
          .querySelector("#body-weight").value);

  let height = parseInt(document
          .querySelector("#body-height").value);

  let age = parseInt(document
          .querySelector("#age").value);

  let result = document.querySelector("#result");

  let comment = document.querySelector("#comment");

  // RADIO CHECK
  if (male.checked==false && female.checked==false)
      result.innerHTML = `<h2 style="color: red; padding: 8.5rem 0;">Pilih Jenis Kelamin Dahulu!</h2>`;
  
  // BMI CALCULATION FIELD CHECK
  else if (weight === "" || isNaN(weight)) 
      result.innerHTML = `<h1 style="color: red; padding: 8.5rem 0;">Kolom Berat Badan Kosong!</h1>`;

  else if (height === "" || isNaN(height)) 
      result.innerHTML = `<h1 style="color: red; padding: 8.5rem 0;">Kolom Tinggi Badan Kosong!</h1>`;

  else if (age === "" || isNaN(age)) 
      result.innerHTML = `<h1 style="color: red; padding: 8.5rem 0;">Kolom Usia Kosong!</h1>`;

  else {

      let bmi = (weight / ((height * height) 
                          / 10000)).toFixed(2);

      // RESULT CONTENTS
      if (bmi < 18.6)
          result.innerHTML =  
          `<h3>Kategori Berat Badan : UNDERWEIGHT</h3>
					<h1 style="color: #000;">${bmi}</h1>
					<h4>Anda memiliki berat badan KURUS</h4>
          <a href="#" class="button">Download Hasil BMI</a>`;

      else if (bmi >= 18.6 && bmi < 24.9) 
          result.innerHTML = 
          `<h3>Kategori Berat Badan : HEALTHY</h3>
					<h1 style="color: green;">${bmi}</h1>
					<h4>Anda memiliki berat badan NORMAL</h4>
          <a href="#" class="button">Download Hasil BMI</a>`;

      else if (bmi >= 25 && bmi < 29.9) 
          result.innerHTML = 
          `<h3>Kategori Berat Badan : OVERWEIGHT</h3>
					<h1 style="color: orange;">${bmi}</h1>
					<h4>Anda memiliki berat badan BERLEBIH</h4>
          <a href="#" class="button">Download Hasil BMI</a>`;

      else result.innerHTML =
          `<h3>Kategori Berat Badan : OBESE</h3>
					<h1 style="color: red;">${bmi}</h1>
					<h4>Anda memiliki berat badan TERLALU GEMUK</h4>
          <a href="#" class="button">Download Hasil BMI</a>`;

      // COMMENT CONTENTS
      if (bmi < 18.6)
          comment.innerHTML =  
          `<p>Hasil <strong>BMI</strong> dibawah nilai <strong>18.6</strong></p>
          <p>Anda berada dalam kategori : <strong>UNDERWEIGHT</strong>.<br />
          Segera konsultasikan kondisi kesehatan dengan dokter. Perbaiki pola makan dengan asupan gizi seimbang dan porsi yang cukup. Lakukan olahraga ringan secara teratur untuk menjaga kebugaran. Jaga juga kesehatan mental dan manajemen stres. Dengan menjalankan pola hidup sehat secara konsisten, berat badan akan meningkat secara bertahap dan aman.</p>`;
      
      else if (bmi >= 18.6 && bmi < 24.9) 
          comment.innerHTML = 
          `<p>Hasil <strong>BMI</strong> diantara nilai <strong>18.6 dan 24.9</strong></p>
          <p>Anda berada dalam kategori : <strong>NORMAL/HEALTHY</strong>.<br />
          Pertahankan pola hidup sehat dengan menjaga keseimbangan asupan gizi dan olahraga teratur. Konsumsi makanan yang bervariasi dan bergizi seimbang. Tetap aktif secara fisik minimal 30 menit per hari. Kelola stres dengan baik, tidur yang cukup, dan hindari kebiasaan buruk. Lakukan pemeriksaan kesehatan rutin untuk memantau kondisi tubuh.</p>`;
                
      else if (bmi >= 25 && bmi < 29.9) 
          comment.innerHTML = 
          `<p>Hasil <strong>BMI</strong> diantara nilai <strong>25 dan 29.9</strong></p>
          <p>Anda berada dalam kategori : <strong>OVERWEIGHT</strong>.<br />
          Mulailah mengatur pola makan dengan mengurangi asupan kalori dan memperbanyak serat. Pilih makanan yang sehat dan batasi makanan tinggi lemak dan gula. Tingkatkan aktivitas fisik secara bertahap, target minimal 150 menit per minggu. Kelola stres dengan baik dan cukup istirahat. Pantau berat badan dan ukur lingkar pinggang secara teratur untuk melihat progres.</p>`;
      
      else comment.innerHTML =
          `<p>Hasil <strong>BMI</strong> diatas nilai <strong>29.9</strong></p>
          <p>Anda berada dalam kategori : <strong>KEGEMUKAN/OBESE</strong>.<br />
          Segera konsultasikan dengan dokter untuk mendapatkan penanganan yang tepat. Ubah pola makan dengan mengurangi asupan kalori, lemak, dan gula. Perbanyak konsumsi serat, buah, dan sayuran. Tingkatkan aktivitas fisik secara bertahap hingga 150-300 menit per minggu. Kelola stres dan perbaiki kualitas tidur. Pantau berat badan dan indikator kesehatan lainnya secara teratur.</p>`;
  }
}