var app = document.getElementById('js');

var typewriter = new Typewriter(app, {
    loop: false
});


setTimeout(function() {
  typewriter.typeString('<strong>jscreator</strong>')
  .start();
}, 1000);

document.querySelector('.projectss').addEventListener('scroll', function() {
    const section = this;
    const iframe = section.querySelector('iframe');
    const scrollHeight = section.scrollHeight;
    const scrollTop = section.scrollTop;

    // Adjust the iframe's top position to scroll within the section
    iframe.style.top = `${scrollTop}px`;

    // If you want to stop scrolling at the end of the section, you can add a condition like this:
    if (scrollTop + section.clientHeight >= scrollHeight) {
        iframe.style.top = `${scrollHeight - section.clientHeight}px`;
    }
});


// hi