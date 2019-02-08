import {Component, Element, Prop} from '@stencil/core';

@Component({
  tag: 'ps-button',
  styleUrl: 'ps-button.scss',
  shadow: true
})
export class MyComponent {
  class = ''
  style = {}
  @Element() element;
  @Prop() raised: boolean
  @Prop() shadow: boolean
  @Prop() text: string
  @Prop() backgroundColor: string
  @Prop() textColor: string
  @Prop({mutable: true}) fontSize = 18

  componentWillLoad() {
    this.class += this.raised ? 'raise-button ' : 'pi-button '
    this.class += this.shadow ? 'with-shadow ' : ''
    this.backgroundColor ?  this.style['background-color'] = this.backgroundColor : ''
    this.textColor ? this.style['color'] = this.textColor : ''
    this.fontSize ? this.style['font-size'] = `${this.fontSize}px` : ''
  }


  render() {
    return (<button class={this.class} style={this.style}>{this.text}</button>)
  }
}
