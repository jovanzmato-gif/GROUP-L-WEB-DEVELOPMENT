 // MODAL FUNCTIONS
  function openModal(id){
    document.getElementById(id).style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeModal(id){
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
  }
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if(e.target === modal){
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // BOOKING / PAYMENT FUNCTIONS
  function openBooking(attraction){
    document.querySelector('.booking-section').style.display = 'block';
    showMethods(attraction);
    window.scrollTo({ top: document.querySelector('.booking-section').offsetTop, behavior: 'smooth' });
  }

  function showMethods(attraction){
    document.querySelector('.booking-methods').style.display = 'block';
    document.querySelector('.booking-procedures').style.display = 'none';
    document.getElementById('selectedAttraction').textContent = "Booking: " + attraction;
  }

  function showProcedures(method){
    document.querySelector('.booking-procedures').style.display = 'block';
    document.getElementById('selectedMethod').textContent = "Payment Method: " + method;

    const procedureText = document.getElementById('procedureText');
    if(method === "Bank"){
      procedureText.innerHTML = "<p>Bank Payment Procedures:<br>1. Choose your bank.<br>2. Transfer the amount.<br>3. Note transaction ID.<br>4. Fill details below and submit.</p>";
    } else if(method === "Credit Card"){
      procedureText.innerHTML = "<p>Credit Card Payment Procedures:<br>1. Enter card number, expiry, and CVV.<br>2. Verify amount.<br>3. Fill details below and submit.</p>";
    } else if(method === "Mobile Money"){
      procedureText.innerHTML = "<p>Mobile Money Procedures:<br>1. Dial your mobile money service.<br>2. Send payment.<br>3. Note transaction ID.<br>4. Fill details below and submit.</p>";
    } else if(method === "PayPal"){
      procedureText.innerHTML = "<p>PayPal Procedures:<br>1. Log in to PayPal.<br>2. Enter payment amount.<br>3. Confirm.<br>4. Fill details below and submit.</p>";
    }
  }

  document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    const textarea = this.querySelector('textarea');
    if(textarea.value.trim() === ""){
      alert("Please fill in all required details!");
      return;
    }
    document.getElementById('successMsg').textContent = "Successfully Sent!";
    this.reset();
  });
  submitBtn.addEventListener('click', () => {
    if(!destinationSelect.value || !paymentMethodSelect.value || !procedureText.value.trim()){
        successMsg.style.color = 'red';
        successMsg.textContent = 'Please fill all fields before sending.';
        return;
    }

    successMsg.style.color = 'green';
    successMsg.textContent = '✔ Payment info sent successfully!';
    procedureText.value = '';
    paymentMethodSelect.value = '';
    destinationSelect.value = '';
    paymentMethodDiv.style.display = 'none';
    procedureDiv.style.display = 'none';
});