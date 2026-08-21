// Gallery modal
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('modalImage').src = img.src;

    });
});

//Status filter
const filter = document.getElementById('statusFilter');
if (filter) {
    filter.addEventListener('change', () => {
        const value = filter.value;
        document.querySelectorAll('#bookTable tr').forEach(row => {
            row.style.display =
                value === 'all' || row.dataset.status === value
                    ? ''
                    : 'none';

        });
    });
}

//Image preview
const imageInput = document.getElementById('imageImput');
const imagePreview = document.getElementById('imagePreview');

if (imageInput) {
    imageInput.addEventListener('change', () => {
        const file = imageInput.files[0];

        if (!file) return;

        const allowed = ['image/png', 'image/jpeg'];
        if (allowed.includes(file.type)) {
            alert('Only PNG and JPG allowed.');
            imageInput.value = '';
            return;
        }

        previewImage.src = URL.createObjectURL(file);
        previewImage.classlist.remove('d-none');
    });
}
