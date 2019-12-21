import React from 'react';
import { Colors } from '../theme';
import styles from './ImageOverlayComponentStyle';
import { ImageBackground, ImageBackgroundProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface ImageOverlayStyle extends ViewStyle {
  overlayColor?: string;
}

type Override<T, U> = Omit<T, keyof U> & U;

type ImageOverlayProps = Override<ImageBackgroundProps, {
  style: StyleProp<ImageOverlayStyle>;
}>;

export type ImageOverlayElement = React.ReactElement<ImageOverlayProps>;

export class ImageOverlay extends React.Component<ImageOverlayProps> {

  private getOverlayColor = (source: string | undefined): string => {
    return source || Colors.transparent15Opacity;
  };

  public render(): React.ReactElement<ImageBackgroundProps> {
    const { style, children, ...restProps } = this.props;
    const { overlayColor: derivedOverlayColor, ...containerStyle } = StyleSheet.flatten(style);

    const overlayColor: string = this.getOverlayColor(derivedOverlayColor);

    return (
      <ImageBackground
        style={containerStyle}
        {...restProps}>
        <View style={[styles.overlay, { backgroundColor: overlayColor }]}/>
        {children}
      </ImageBackground>
    );
  }
}
