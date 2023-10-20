
export const createNativeStackNavigator = jest.fn((options) => {
  // Your mock implementation here, e.g., return a dummy navigator
  return {
    Navigator: 'MockStackNavigator',
    Screen: 'MockStackScreen',
  };
});
