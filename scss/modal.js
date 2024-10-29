var bookingmodal = document.getElementById('bookingmodal')
bookingmodal.addEventListener('show.bs.modal', function (event) {

  var button = event.relatedTarget

  var recipient = button.getAttribute('data-bs-whatever')
 

  var modalTitle = bookingmodal.querySelector('.modal-title')
  var modalBodyInput = bookingmodal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})