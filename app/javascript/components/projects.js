const projectImgInfo = () => {
  // Dining Room
  const imageDivDr = document.querySelector('#project-img-dr');

  imageDivDr.addEventListener('mouseenter', function() {
    const infoDr = document.querySelector('#link-dr');
    infoDr.classList.remove('hidden');
  });

   imageDivDr.addEventListener('mouseleave', function() {
    const infoDr = document.querySelector('#link-dr');
    infoDr.classList.add('hidden');
  });

  // Teamup
  const imageDivTu = document.querySelector('#project-img-tu');

  imageDivTu.addEventListener('mouseenter', function() {
    const infoTu = document.querySelector('#link-tu');
    infoTu.classList.remove('hidden');
  });

   imageDivTu.addEventListener('mouseleave', function() {
    const infoTu = document.querySelector('#link-tu');
    infoTu.classList.add('hidden');
  });

  // PsychIO
  const imageDivPi = document.querySelector('#project-img-pi');

  imageDivPi.addEventListener('mouseenter', function() {
    const infoPi = document.querySelector('#link-pi');
    infoPi.classList.remove('hidden');
  });

   imageDivPi.addEventListener('mouseleave', function() {
    const infoPi = document.querySelector('#link-pi');
    infoPi.classList.add('hidden');
  });
}

export { projectImgInfo };
