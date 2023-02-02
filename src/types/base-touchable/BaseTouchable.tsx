export type BaseTouchableProps = {
  buttons: Array<BaseTouchableButtons>;
};

export type BaseTouchableButtons = {
  text: string;
  onPress: () => void;
  isDisabled: boolean | undefined;
};
