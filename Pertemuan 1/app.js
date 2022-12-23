// cek
alert("oke berhasil terhubung");

//ambil elemen intput user
const getUsername = document.querySelector("#username");
const getPassword = document.querySelector("#password");
const getForm = document.querySelector("form");

// buat user dan password
const USERS = [
    {
        name: "shafa@gmail.com",
        password: "999",
    },
];

// testing consol.log('user)
console.log(USERS);

// lakukan prulangan untuk ambil data dari database
USERS.forEach((user) => {
    console.log(user)
});

//tambahkan event ketika user klik login form
getForm.addEventListener("submit", (Event) => {
    // agar ketika user klik login tidak terload browsernya
    Event.preventDefault();

    // ambil value dari input username
    // alert(getUsername.value);
    
    // lakukan percabangan dan perulangan
    USERS.forEach((user) => {

        // percabangan
        if(getUsername.value ==user.name && getPassword.value ==user.password) {
            alert("oke berhasil login");
        } else {
            alert("invalid Credentials");
        }
    });

});