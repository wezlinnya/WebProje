new Vue({
    el: '#app',
    data: {
        formData: {
            name: '',
            surname: '',
            email: '',
            message: '',
            age: null,
            gender: '',
        }
    },
    methods: {
        nameCheck() {
            if (this.formData.name == '')
                throw new Error("name: bu alan boş olamaz.");
            else if (this.formData.name.lenght <= 1)
                throw new Error("name: ismin tek harfli olamaz de mi :D.");
        },
        surnameCheck() {
            if (this.formData.surname == '')
                throw new Error("soyisim: bu alan boş olamaz.");
            else if (this.formData.name.surname <= 1)
                throw new Error("soyisim: soyismin tek harfli olamaz de mi :D.");
        },
        emailCheck() {
            if (this.formData.email == '')
                throw new Error("e-mail: bu alan boş olamaz.");
            else if (!this.formData.email.includes('@')) {
                throw new Error("e-mail: geçerli bir mail adresi gir.");
            }
        },
        ageCheck() {
            if (this.formData.age < 1 || this.formData.age > 130)
                throw new Error("yaş: 1-130 arası kabul edilebilir!");
            else if (this.formData.age == null)
                throw new Error("yaş: alan boş olamaz");
        },
        genderCheck() {
            if (this.formData.gender == '')
                throw new Error("cinsiyet: bu alan boş olamaz.");
        },
        messageCheck() {
            if (this.formData.message == '')
                throw new Error("mesaj: bu alan boş olamaz.");
            else if (this.formData.message.lenght > 200)
                throw new Error("mesaj: 200 karakterden fazla mesajları kabul etmem.");
        },
        redirect() {
            const formData = {
                name: document.getElementById('name').value,
                surname: document.getElementById('surname').value,
                email: document.getElementById('email').value,
                age: document.getElementById('age').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                message: document.getElementById('message').value
            };
        },
        submitForm(event) {
            event.preventDefault();  // Formun otomatik olarak gönderilmesini durdur
            try {
                this.nameCheck();
                this.surnameCheck();
                this.emailCheck();
                this.ageCheck();
                this.genderCheck();
                this.messageCheck();

                console.log('Form gönderildi!');
                //console.log(this.formData);
                alert('Yönlendiriliyorsun');
                this.redirect();
                document.getElementById('myform').submit();  // Doğrulama başarılı olduğunda formu gönder
                // Doğrulama başarılıysa true döner ve form gönderilir
                return true;
            } catch (error) {
                alert("An error occurred: " + error);
                return false;  // Doğrulama başarısız olduğunda formu gönderme
            }
        },
        resetForm() {
            // Formu temizle
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
            this.formData.surname = '';
            this.formData.age = null;
            this.formData.gender = '';
        }
    }
});