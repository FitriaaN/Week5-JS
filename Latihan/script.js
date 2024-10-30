      document.getElementById('employeeForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const errors = document.querySelectorAll('.error');
            errors.forEach(error => error.textContent = '');

            let isValid = true;

            const name = document.getElementById('name').value;
            if (!name) {
                document.getElementById('nameError').textContent = 'Nama harus diisi.';
                isValid = false;
            }

            const email = document.getElementById('email').value;
            if (!email) {
                document.getElementById('emailError').textContent = 'Email harus diisi.';
                isValid = false;
            }

            const phone = document.getElementById('phone').value;
            if (!phone) {
                document.getElementById('phoneError').textContent = 'Nomor Telepon harus diisi.';
                isValid = false;
            }

            const position = document.getElementById('position').value;
            if (!position) {
                document.getElementById('positionError').textContent = 'Jabatan harus diisi.';
                isValid = false;
            }

            if (isValid) {
                alert('Form berhasil dikirim!');
            }
        });
