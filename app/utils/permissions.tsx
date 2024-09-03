import * as Permissions from 'expo-permissions';

export const askForCameraPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);

  if (status !== 'granted') {
    alert("Desculpe, precisamos de permissão para acessar a câmera.")
  }

  return status;
}