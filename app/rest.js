/* global fetch, _api_ */
function getHeaders(additionalHeaders = {}) {
  const headers = {
    'Accept': 'text/plain',
    'Content-Type': 'text/plain; charset=UTF-8',
    ...additionalHeaders
  };

  Object
    .keys(headers)
    .filter(key => !headers[key])
    .forEach(key => delete headers[key]);

  return headers;
}

function serverErrorCallback(res) {
  if (!res.ok || res.message) {
    throw Error(res.statusText || res.error || res.message);
  }
  return res;
}

function apiErrorCallback(res) {
  if (!res || res.error || res.message) {
    throw Error(res.error || res.message);
  } else {
    return res;
  }
}

function jsonCallback(res) {
  let data = res;
  try {
    data = JSON.parse(res);
  } catch (e) {
    console.log('can\'t parse JSON', res); // eslint-disable-line no-console
  }
  return data;
}

export function getData(query) {
  return fetch(_api_, {
    method: 'GET',
    headers: getHeaders()
  })
    .then((res) => res.text())
    .then(jsonCallback)
    .then(apiErrorCallback)
    .catch(serverErrorCallback);
}
