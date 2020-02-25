/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcStateView {
    /**
    * Main Image Source
    */
    'source': any;
    'stateSubtitle': string;
    'stateTitle': string;
  }
}

declare global {


  interface HTMLPwcStateViewElement extends Components.PwcStateView, HTMLStencilElement {}
  var HTMLPwcStateViewElement: {
    prototype: HTMLPwcStateViewElement;
    new (): HTMLPwcStateViewElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-state-view': HTMLPwcStateViewElement;
  }
}

declare namespace LocalJSX {
  interface PwcStateView {
    /**
    * Main Image Source
    */
    'source'?: any;
    'stateSubtitle'?: string;
    'stateTitle'?: string;
  }

  interface IntrinsicElements {
    'pwc-state-view': PwcStateView;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-state-view': LocalJSX.PwcStateView & JSXBase.HTMLAttributes<HTMLPwcStateViewElement>;
    }
  }
}


