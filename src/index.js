import './style.scss';
import { Background } from './background';
import { Restrictor } from './restrictor';
import { SnapGrid } from './snap';
import { zoomAt } from './zoom-at';

function install(editor, params) {
  const {
    background = false,
    snap = false,
    scaleExtent = false,
    translateExtent = false,
    backgroundClass = null,
  } = params;

  if (background) {
    this._background = new Background(editor, background, backgroundClass);
  }
  if (scaleExtent || translateExtent) {
    this._restrictor = new Restrictor(editor, scaleExtent, translateExtent)
  }
  if (snap) {
    this._snap = new SnapGrid(editor, snap);
  }
}

export default {
  install,
  zoomAt,
}
