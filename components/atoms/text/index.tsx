import React from "react";

const Text = ({ ...props }: ITextProps) => {
  switch (props.fontSize) {
    case "Xsmall":
      return (
        <p
          className="text-xs"
          style={{
            fontWeight: props.fontWeight,
            color: props.color,
          }}
        >
          {props.text}
        </p>
      );

      break;

    case "small":
      return (
        <p
          className="text-sm"
          style={{
            fontWeight: props.fontWeight,
            color: props.color,
          }}
        >
          {props.text}
        </p>
      );

    case "large":
      return (
        <p
          className="text-lg"
          style={{
            fontWeight: props.fontWeight,
            color: props.color,
          }}
        >
          {props.text}
        </p>
      );

    case "normal":
      return (
        <p
          className="text-normal"
          style={{
            fontWeight: props.fontWeight,
            color: props.color,
          }}
        >
          {props.text}
        </p>
      );

    case "mega":
      return (
        <p
          className="text-xl"
          style={{
            fontWeight: props.fontWeight,
            color: props.color,
          }}
        >
          {props.text}
        </p>
      );

    case "Xlarge":
      return (
        <p
          className="text-2xl"
          style={{
            fontWeight: props.fontWeight,
            color: props.color,
          }}
        >
          {props.text}
        </p>
      );

    case "XXlarge":
      return (
        <p
          className="text-5xl"
          style={{
            fontWeight: props.fontWeight,
            color: props.color,
          }}
        >
          {props.text}
        </p>
      );

    default:
      break;
  }
};

export default Text;
