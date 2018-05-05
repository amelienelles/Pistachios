import React from "react"

import { Picture, Source, Img } from "../components-styled"

class DCPicture extends React.Component {
  render() {
    return (
      /** Sort from large to small */
      <Picture>
        <Source
          media={"(min-width: 1441px)"}
          srcSet={this.props.img["0100"]["4x1"]}
          data-srcset={this.props.img["1920"]["4x1"]}
        />
        <Source
          media={"(min-width: 1201px)"}
          srcSet={this.props.img["0100"]["3x1"]}
          data-srcset={this.props.img["1440"]["3x1"]}
        />
        <Source
          media={"(min-width: 1001px)"}
          srcSet={this.props.img["0100"]["235x100"]}
          data-srcset={this.props.img["1440"]["235x100"]}
        />
        <Source
          media={"(min-width: 801px)"}
          srcSet={this.props.img["0100"]["16x9"]}
          data-srcset={this.props.img["1200"]["16x9"]}
        />
        <Source
          media={"(min-width: 481px)"}
          srcSet={this.props.img["0100"]["3x2"]}
          data-srcset={this.props.img["0800"]["3x2"]}
        />
        <Img
          data-sizes="100vw"
          src={this.props.img["0480"]["4x3"]}
          className="lazyload blur-up"
          alt={"Missing image"}
        />
      </Picture>
    )
  }
}

export default DCPicture
