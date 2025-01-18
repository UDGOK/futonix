declare module 'react-image-lightbox' {
  import { Component } from 'react';

  export interface ReactImageLightboxProps {
    mainSrc: string;
    prevSrc?: string;
    nextSrc?: string;
    mainSrcThumbnail?: string;
    prevSrcThumbnail?: string;
    nextSrcThumbnail?: string;
    onCloseRequest?: () => void;
    onMovePrevRequest?: () => void;
    onMoveNextRequest?: () => void;
    onImageLoad?: () => void;
    onImageLoadError?: () => void;
    imageTitle?: React.ReactNode;
    imageCaption?: React.ReactNode;
    toolbarButtons?: React.ReactNode[];
    reactModalStyle?: object;
    reactModalProps?: object;
    imagePadding?: number;
    animationDisabled?: boolean;
    animationDuration?: number;
    animationOnKeyInput?: boolean;
    clickOutsideToClose?: boolean;
    closeLabel?: string;
    discourageDownloads?: boolean;
    enableZoom?: boolean;
    imageLoadErrorMessage?: React.ReactNode;
    nextLabel?: string;
    prevLabel?: string;
    zoomInLabel?: string;
    zoomOutLabel?: string;
    wrapperClassName?: string;
  }

  export default class ReactImageLightbox extends Component<ReactImageLightboxProps> {}
}