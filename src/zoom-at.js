import { nodesBBox } from './utils';

export function zoomAt(editor, nodes = editor.nodes) {
  const bbox = nodesBBox(editor, nodes);
  const [x, y] = bbox.getCenter();
  const { area, container } = editor.view;
  const [w, h] = [container.clientWidth, container.clientHeight];

  const [kw, kh] = [w / bbox.width, h / bbox.height];
  const k = Math.min(kh * 0.9, kw * 0.9, 1);

  area.transform.x = area.container.clientWidth / 2 - x * k;
  area.transform.y = area.container.clientHeight / 2 - y * k;
  area.zoom(k, 0, 0);

  area.update();
}
