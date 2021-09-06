const getPosition = position => {
  consol.log(position.coords.latitude);
  consol.log(position.coords.longitude);
  consol.log(position.coords.speed);
  debugger;
};

const procesarError = err => {
  // readonly code: number;
  // readonly message: string;
  // readonly PERMISSION_DENIED: number;
  // readonly POSITION_UNAVAILABLE: number;
  // readonly TIMEOUT: number;
  switch (err.code) {
    case err.PERMISSION_DENIED:
      break;
    case err.POSITION_UNAVAILABLE:
      break;
    case err.TIMEOUT:
      break;

    default:
      break;
  }
  debugger;
};

if (window.navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    getPosition,
    procesarError
  );
  // navigator.geolocation.watchPosition(position);
} else {
  alert("No podes usar este sitio");
}
