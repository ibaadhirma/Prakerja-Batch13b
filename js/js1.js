
        // function tampilkan_nama() {
        //     document.getElementById("hasil").innerHTML = "<h1>Hacktiv8</h1>";
        //     document.body.style.backgroundColor = "white";
        // };
    
        function lightMode() {
            let element = document.body;
            element.classList.toggle("dark-mode");
        }

        // function store(){
        //     let inputEmail= document.getElementById("email");
        //     localStorage.setItem("email", inputEmail.value);
        //     console.log(inputEmail)
        //    }
function simpan()
{
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const country = document.getElementById("country");
    const subject = document.getElementById("subject");

    console.log(country.value)
    console.log(subject.value)
}