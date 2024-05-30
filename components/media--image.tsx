import Image, { ImageProps } from "next/image"

import { absoluteURL } from "lib/utils"
import { MediaProps } from "components/media"

import styled from "styled-components"

interface MediaImageProps extends MediaProps, Partial<ImageProps> {}

export function MediaImage({
  media,
  layout = "responsive",
  objectFit,
  width,
  height,
  priority,
  ...props
}: MediaImageProps) {
  // console.log(objectFit);
  
  const image = media?.field_media_image

  if (!image?.uri) {
    return null
  }

  const sizeProps =
    layout === "fill"
      ? null
      : {
          width: width || image.resourceIdObjMeta.width,
          height: height || image.resourceIdObjMeta.height,
        }

  return (
    <StyledDiv className="media__content image__wrapper relative" {...props}>
      <StyledImage
        src={absoluteURL(image.uri.url)}
        objectFitX={objectFit.toString()}
        alt={image.resourceIdObjMeta.alt || "Image"}
        title={image.resourceIdObjMeta.title}
        priority={priority}
        {...sizeProps}
        sizes="100vw" />
    </StyledDiv>
  );
}

// create a styledimage component to replicate old behavior of next/image
export const StyledImage = styled(Image)<{ objectFitX: string }>`
  object-fit: ${(props) => props.objectFitX || "cover"};
  width: 100%;
  height: ${(props) => props.objectFitX === "cover" ? "100%" : "auto"};
`

//styled outer div
export const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
