;(function (window) {
  function define_library() {
    let vanillaZoom = {}

    vanillaZoom.init = function (el) {
      let container = document.querySelector(el)
      if (!container) {
        console.error(
          'No container element. Please make sure you are using the right markup.'
        )
        return
      }

      let firstSmallImage = container.querySelector('.small-preview')
      let zoomedImage = container.querySelector('.zoomed-image')

      if (!zoomedImage) {
        console.error(
          'No zoomed image element. Please make sure you are using the right markup.'
        )
        return
      }

      if (!firstSmallImage) {
        console.error(
          'No preview images on page. Please make sure you are using the right markup.'
        )
        return
      } else {
        // Set the source of the zoomed image.
        zoomedImage.style.backgroundImage = 'url(' + firstSmallImage.src + ')'
      }

      // Change the selected image to be zoomed when clicking on the previews.
      container.addEventListener('click', function (event) {
        let elem = event.target

        if (elem.classList.contains('small-preview')) {
          let imageSrc = elem.src
          zoomedImage.style.backgroundImage = 'url(' + imageSrc + ')'
        }

        // console.log(elem.parentElement.classList.add('active'));
      })

      // Zoom image on mouse enter.
      zoomedImage.addEventListener(
        'mouseenter',
        function (e) {
          this.style.backgroundSize = '250%'
        },
        false
      )

      // Show different parts of image depending on cursor position.
      zoomedImage.addEventListener(
        'mousemove',
        function (e) {
          // getBoundingClientReact gives us letious information about the position of the element.
          let dimentions = this.getBoundingClientRect()

          // Calculate the position of the cursor inside the element (in pixels).
          let x = e.clientX - dimentions.left
          let y = e.clientY - dimentions.top

          // Calculate the position of the cursor as a percentage of the total width/height of the element.
          let xpercent = Math.round(100 / (dimentions.width / x))
          let ypercent = Math.round(100 / (dimentions.height / y))

          // Update the background position of the image.
          this.style.backgroundPosition = xpercent + '% ' + ypercent + '%'
        },
        false
      )

      // When leaving the container zoom out the image back to normal size.
      zoomedImage.addEventListener(
        'mouseleave',
        function (e) {
          this.style.backgroundSize = 'cover'
          this.style.backgroundPosition = 'center'
        },
        false
      )
    }

    return vanillaZoom
  }

  // Add the vanillaZoom object to global scope.
  if (typeof vanillaZoom === 'undefined') {
    window.vanillaZoom = define_library()
  } else {
    console.log('Library already defined.')
  }
})(window)
