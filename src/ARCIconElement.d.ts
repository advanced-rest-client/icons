import { LitElement } from 'lit-element';

declare class ARCIconElement extends LitElement {
  /**
   * An icon to be rendered from the ApiIcons library.
   * When incorrect icon is referenced nothing is rendered.
   */
  icon: string;
  /**
   * True when the icon was found and is rendered.
   */
  readonly hasIcon: boolean;
}

export {ARCIconElement};
