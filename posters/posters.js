function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
  }

  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const downloadLink = document.getElementById('downloadLink');

  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImage.src = img.src;
      downloadLink.href = img.src;
    });
  });

  function closeModal() {
    modal.style.display = 'none';
    modalImage.src = '';
    downloadLink.href = '';
  }