import * as Notifications from "expo-notifications";

export const getPushNotification = async () => {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();

    console.log("notification Token => ", pushToken.data);

    return pushToken.data;
  }
};
