// 🔹 Function to show image popup
    function showImagePopup(imageUrl) {
      const popup = document.getElementById('imagePopup');
      const popupImg = document.getElementById('popupImage');
      popupImg.src = imageUrl;
      popup.style.display = 'flex';
    }

    // 🔹 Function to close popup
    function closeImagePopup() {
      document.getElementById('imagePopup').style.display = 'none';
    }

    // Optional: Close when clicking outside the box
    document.getElementById('imagePopup').addEventListener('click', function (e) {
      if (e.target === this) closeImagePopup();
    });
