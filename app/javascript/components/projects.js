const projectImgInfo = () => {
  const imageDiv = document.querySelectorAll('.project-img');

  // imageDiv.addEventListener('mouseenter', function() {
  //   const info = document.querySelectorAll('.github-link');
  //   info.classList.remove('hidden');
  // });

  for (var i = 0; i < imageDiv.length; i++) {
    imageDiv[i].addEventListener('mouseenter', function () {
      const info = document.querySelectorAll('.github-link');
      for (var i = 0; i < info.length; i++) {
        info[i].classList.remove('hidden');
      }
    });
  }

  for (var i = 0; i < imageDiv.length; i++) {
    imageDiv[i].addEventListener('mouseleave', function () {
      const info = document.querySelectorAll('.github-link');
      for (var i = 0; i < info.length; i++) {
        info[i].classList.add('hidden');
      }
    });
  }
}

export { projectImgInfo };
