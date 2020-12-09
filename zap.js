const textbox = document.querySelector('div._1awRl[data-tab="6"]');

const travazap = (text) => {
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i];

    ((line, ind) => {
      setTimeout(() => {
        window.InputEvent = window.Event || window.InputEvent;

        const event = new InputEvent('input', {
          bubbles: true
        });

        textbox.textContent = line;
        textbox.dispatchEvent(event);
        document.querySelector('button._2Ujuu').click();
      }, 1000 + (250 * ind));
    })(currentLine, i);
  };
};

travazap(`

`);