let ratings = document.querySelectorAll('.circle');  //all divs with numbers//
let btn = document.getElementById('btn'); // button //
let evaluation = document.querySelector('.evaluation'); // evalutation div //
let thankyou = document.querySelector('.thankyou'); // thank you div //
let span = document.getElementById('rating'); // empty span where the user selected rating will be displayed//

function handleRatingClick(event) {
  const selectedRating = event.target.innerHTML;

  ratings.forEach(rating => {
    rating.classList.remove('selected');
  });

  event.target.classList.add('selected');
  
  span.innerHTML = selectedRating;
}

ratings.forEach(rating => {
  rating.addEventListener('click', handleRatingClick);
});

btn.addEventListener('click', () => {
  evaluation.style.display = 'none';
  thankyou.style.display = 'block';
});