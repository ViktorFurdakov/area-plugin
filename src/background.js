export class Background {
  constructor(editor, element, cssClass) {
    if (!element) return;
    const el = element instanceof HTMLElement ? element : document.createElement('div');
    const classList = ['rete-background'];
    classList.push(cssClass ? cssClass : 'default');
    el.classList.add(...classList);
    editor.view.area.appendChild(el);
  }
}
