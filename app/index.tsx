import { Redirect } from "expo-router";

export default function Index() {
  // This automatically pushes the user into the (tabs) folder when the app loads
  return <Redirect href="/(tabs)" />;
}
