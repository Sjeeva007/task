import React from "react";

export default function Form() {
  return (
    <>
      <div className="fo">
        <fieldset>
          <h1>
            ISI FORMULIR DIBAWAH INI <br></br>UNTUK MENJADI BAGIAN DARI KAMI
          </h1>
          <br></br>
          <h3>DATA PRIBADI PEMOHON</h3>
          <hr></hr>
          <div className="for">
            <label for="fname">Nama Lengkap *</label>
            <input type="text" placeholder="John Doe" />
            <br></br>
            <br></br>
            <label for="fname">Jenis Kelamin *</label>
            <input type="radio" value="" />
            <br></br>
            <label for="fname">Provinsi *</label>
            <input type="text" placeholder="Provinsi" />
            <br></br>
            <br></br>
            <label for="fname">Kodya / Kabupaten*</label>
            <input type="text" placeholder="Kodya / Kabupaten*" />
            <br></br>
            <br></br>
            <label for="fname">Kodya / Kabupaten*</label>
            <input type="text" placeholder="Kodya / Kabupaten*" />
            <br></br>
            <br></br>
            <label for="fname">Kodya / Kabupaten*</label>
            <input type="text" placeholder="Kodya / Kabupaten*" />
            <br></br>
            <br></br>
            <label for="fname">Kodya / Kabupaten*</label>
            <input type="text" placeholder="Kodya / Kabupaten*" />
            <br></br>
            <br></br>
          </div>
        </fieldset>
      </div>
    </>
  );
}
