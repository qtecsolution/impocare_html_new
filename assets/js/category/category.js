const links = Array.from(document.querySelectorAll('.mobcategory .categorylist-link'));

links.forEach(function(link) {
  link.addEventListener('click', function() {
    const sibling = this.nextElementSibling;

    if(sibling.classList.contains('is-active')) {
      sibling.classList.remove('is-active');
    } else {
      sibling.classList.add('is-active');
    }
  });
});

const backButtons = Array.from(document.querySelectorAll('.back-category'));

backButtons.forEach(function(backbutton) {
  backbutton.addEventListener('click', function() {
    const parent = this.parentElement;

    if(parent.classList.contains('is-active')) {
      parent.classList.remove('is-active');
    } else {
      parent.classList.add('is-active');
    }
  });
});
