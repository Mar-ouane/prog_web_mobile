function toggleDetailsRequired() {
    var serviceSelect = document.getElementById('service');
    var detailsTextarea = document.getElementById('details');
    if (serviceSelect.value === 'custom-services') {
        detailsTextarea.setAttribute('required', 'required');
    } else {
        detailsTextarea.removeAttribute('required');
    }
}
// Add event listener to the service select element
document.getElementById('service').addEventListener('change', toggleDetailsRequired);