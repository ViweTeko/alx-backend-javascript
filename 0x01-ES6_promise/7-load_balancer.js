export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDowload, USDownload];

  return Promise.race(promises).then((value) => value);
}
